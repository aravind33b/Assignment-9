const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3200;
const Router = require("./action/UserActions")
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
 
app.listen(port, () => {
  console.log("Server is running on port 3200");
});

app.use("/user", Router);

// app.get('/test', );
 
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

module.exports = app;