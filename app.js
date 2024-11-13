const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/RouteUser');

const app = express();

// Forbindelse til MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userdb')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware til JSON body parsing (uden `body-parser`)
app.use(express.json());

// Ruter
app.use('/api', userRoutes);

// Starter serveren
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});