const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const staticRoutes = require('./routes/staticRoutes'); // Import static routes

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Use Static Routes
app.use(staticRoutes);

// View Engine and Templates
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

// Index route
app.get("/", function(req, res) {
  res.render("index", { title: "Home" });
});

// API Routes
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
