const express = require('express');
const xlsx = require('xlsx');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

// Endpoint to save contact data
app.post('/api/save-data', (req, res) => {
    const { first_name, last_name, email, phone_number, message } = req.body;

    // Create a new workbook and a new worksheet
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet([{ first_name, last_name, email, phone_number, message }]);

    // Append the worksheet to the workbook
    xlsx.utils.book_append_sheet(wb, ws, 'Contact Data');

    // Write the workbook to a file
    const filePath = 'ContactData.xlsx';
    xlsx.writeFile(wb, filePath);

    res.status(200).json({ message: 'Data saved successfully!', filePath });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
