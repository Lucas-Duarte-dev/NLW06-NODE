import express from "express";

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  return res.send("Olá NLW 06");
});
app.post("/test", (req, res) => {
  return res.send("Olá NLW 06");
});

app.listen(3333);
