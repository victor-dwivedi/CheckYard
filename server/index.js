// server.js
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

const connect = require("./config/database");
connect();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const route = require("./routes/userRoutes");
app.use("/v1",route);

const server = app.listen(port, () => {
    console.log(`✅ App is running on http://localhost:${port}`);
});

// Optional: listening event for detailed log
server.on('listening', () => {
    const addr = server.address();
    console.log(`✅ Express server started at ${addr.address}:${addr.port}`);
});
