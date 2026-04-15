const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    return res.json({ message: "Login berhasil", token: "123abc" });
  }

  res.status(401).json({ message: "Login gagal" });
});

app.listen(3000, () => {
  console.log("Auth Service running");
});
