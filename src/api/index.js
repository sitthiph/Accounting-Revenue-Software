require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Enables CORS
app.use(cors({ origin: true }));

// Enables Helmet, a set of tools to increase security.
app.use(helmet());

module.exports = app;
