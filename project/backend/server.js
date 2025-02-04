const express = require('express');
const mongoDb = require('./db.js');
const cors = require('cors'); // Import cors package
const app = express();
const port = 5000;

mongoDb();

// Configure CORS
const allowedOrigins = ['https://grub-go-nu.vercel.app']; // Add your frontend origin here
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Enable credentials (e.g., cookies)
}));

app.use(express.json());

// Routes
app.use('/api', require('./routes/CreatUser'));
app.use('/api', require('./routes/DisplayData'));
app.use('/api', require('./routes/Cart'));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
