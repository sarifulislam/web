const express = require('express');
const xlsx = require('xlsx');
const { Storage } = require('@google-cloud/storage');
const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Cloud Storage
const storage = new Storage();
const bucketName = 'ssi-tech-solution';  // Replace with your actual Cloud Storage bucket name
const bucket = storage.bucket(bucketName);

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

// Endpoint to save contact data
app.post('/api/save-data', async (req, res) => {
    const { first_name, last_name, email, phone_number, message } = req.body;

    // Create a new workbook and a new worksheet
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet([{ first_name, last_name, email, phone_number, message }]);

    // Append the worksheet to the workbook
    xlsx.utils.book_append_sheet(wb, ws, 'Contact Data');

    // Write the workbook to a buffer
    const buffer = xlsx.write(wb, { bookType: 'xlsx', type: 'buffer' });

    // Define a file name and path
    const fileName = `ContactData-${Date.now()}.xlsx`;

    // Create a Cloud Storage file reference
    const file = bucket.file(fileName);

    // Upload the buffer to Google Cloud Storage
    try {
        await file.save(buffer, {
            contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const fileUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
        res.status(200).json({ message: 'Data saved successfully!', fileUrl });
    } catch (error) {
        console.error('Error uploading file to Cloud Storage:', error);
        res.status(500).json({ message: 'Error saving data', error: error.message });
    }
});

// GET endpoint for root path
app.get('/', (req, res) => {
    res.send('Welcome to the application!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
