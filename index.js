import express from "express";
const app = express();

const myName = process.env.MY_NAME || "Chaim";

app.get("/", (req, res) => {
  res.send(`Hello, ${myName}! Your server is working on Render.`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});