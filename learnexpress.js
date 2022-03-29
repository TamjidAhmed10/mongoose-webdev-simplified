const express = require("express");
const app = express();

app.get("/", (req , res) => {
  res.status(201).send("hello world")
})


// app.get("/", (req, res) => {
//   res.status(200).json({ message: " no Error" });
// });
// app.get("/about", (req, res) => { 
//   res.status(200).send("About page");
// })
app.listen(3000);
