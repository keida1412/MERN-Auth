const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

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
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(port, () => console.log(`listening on port ${port}`));