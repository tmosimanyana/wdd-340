const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./routes/home'); // Adjust the path if needed

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use the home router
app.use('/', homeRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
