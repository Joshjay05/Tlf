const express = require('express');
const path = require("path");
const route = require('./routes/index');
const cors = require("cors");
const app = express();

app.use(cors());app.use(express.json());app.use("/api")