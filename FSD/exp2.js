const express = require("express");
const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Hardcoded username and password
const USERNAME = "admin";
const PASSWORD = "1234";

// Login page
app.get("/", (req, res) => {
  res.send(`
    <h2>User Login</h2>
    <form method="post" action="/login">
      <label>Username:</label><br>
      <input type="text" name="username" required><br><br>
      <label>Password:</label><br>
      <input type="password" name="password" required><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Login validation
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    res.send("<h3>Login Successful</h3>");
  } else {
    res.send("<h3>Invalid Username or Password</h3>");
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
