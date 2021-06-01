const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use("/", express.static(path.join(__dirname, "frontend")));
app.use("/api", (req, res) => res.send("Hello World! express"));

app.listen(port, () => console.log(`Example app listening port ${port}!`));
