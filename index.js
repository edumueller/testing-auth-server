const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
// DB Setup
mongoose.connect("mongodb://localhost/auth");
// App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
// Server Setup
const PORT = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(PORT);
console.log(`Server listening on port ${PORT}`);
