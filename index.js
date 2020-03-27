const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose
    .connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));

const port = process.env.PORT || 5000;

const login_page = require("./routes/login");
const signup_page = require("./routes/signup");

app.use(cors());
app.use(express.json());

app.use("/login", login_page);
app.use("/signup", signup_page);

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.listen(port, () => console.log(`listening on port ${port}`));