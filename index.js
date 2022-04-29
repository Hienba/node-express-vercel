// Import packages
const express = require("express");
//const home = require("./routes/home.html");

// Middlewares
const app = express();
app.use(express.json());

// Routes
//app.use("/", home);
app.use(express.static('routes'))
app.get("/", (req,res) => res.render("/home.html"));
// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
