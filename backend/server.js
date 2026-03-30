const express = require("express");
require("./src/config/db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authenticateUser = require("./src/middleware/authMiddleware");

app.get("/protected", authenticateUser, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user,
  });
});