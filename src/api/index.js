require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const cors = require('cors');
const multer = require('multer');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
const routes = express.Router();
require("../../routes/apiRoutes.js")(routes);
require("../../routes/htmlRoutes.js")(routes);

// Enables CORS
app.use(cors({ origin: true }));

// Enables Helmet, a set of tools to increase security.
app.use(helmet());

module.exports = app;
