const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
const createUser = require("./routers/createUser");
const deleteUser = require("./routers/deleteUser");
const getUserByID = require("./routers/getUserByID");
const getUsers = require("./routers/getUsers");
const updateUser = require("./routers/updateUser");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your-database-url' with your MongoDB URL)
mongoose.connect("mongodb://your-database-url/your-database-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Routes
app.use("/createUser", createUser);
app.use("/deleteUser", deleteUser);
app.use("/getUserByID", getUserByID);
app.use("/getUsers", getUsers);
app.use("/updateUser", updateUser);
