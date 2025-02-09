const express = require('express');
const xlsx = require('xlsx');
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const cors = require('cors'); // Import the CORS package
const { initializeApp } = require('firebase/app'); // Import Firebase
const { getFirestore } = require('firebase/firestore'); // Import Firestore
const { getAuth } = require('firebase/auth'); // Import Firebase Authentication

const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const bucketName = process.env.BUCKET_NAME; 


// Check if required environment variables are set
if (!bucketName) {
    console.error("Error: BUCKET_NAME environment variable is not set.");
    process.exit(1);
}

// Initialize Cloud Storage
const storage = new Storage();
const bucket = storage.bucket(bucketName);

// Configure CORS for a **single origin**
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

console.log(`🌍 CORS is set to allow: ${allowedOrigin}`);

// Middleware to parse JSON bodies and handle multipart/form-data
app.use(express.json());
app.use(multer().none());

// Endpoint to save contact data
app.post('/api/save-data', async (req, res) => {
    const { first_name, last_name, email, phone_number, message } = req.body;

    // Validate input data
    if (!first_name || !last_name || !email || !phone_number || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    console.log('Received contact data:', { first_name, last_name, email, phone_number, message });

    // Create an Excel workbook and worksheet
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet([{ first_name, last_name, email, phone_number, message }]);
    xlsx.utils.book_append_sheet(wb, ws, 'Contact Data');

    // Convert workbook to buffer
    const buffer = xlsx.write(wb, { bookType: 'xlsx', type: 'buffer' });

    // Define a file name
    const fileName = `ContactData-${Date.now()}.xlsx`;
    const file = bucket.file(fileName);

    try {
        // Upload the file to Cloud Storage
        await file.save(buffer, {
            contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const fileUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
        res.status(200).json({ message: 'Data saved successfully!', fileUrl });
    } catch (error) {
        console.error('Error uploading file to Cloud Storage:', error);
        res.status(500).json({ message: 'Failed to save data. Please try again.', error: error.message });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the application!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Using bucket: ${bucketName}`);
});
