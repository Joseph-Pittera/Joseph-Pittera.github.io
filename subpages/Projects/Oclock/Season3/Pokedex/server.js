const express = require("express");
const app = express();
const port = 3000;
const router = require("./modules/router");

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(router);

app.listen(port, console.log("server listen on port " + port));
