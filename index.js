import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 6000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).send({
    msg: "Hello, This is Node js CI CD Devops project rj16082000",
  });
});

app.get("/api/hi", (req, res) => {
  res.status(200).send({
    msg: "Hi, Harsha Ritik16082000 Harsha I have successfully deployed my devops project with docker and kind cluster via NodePort with github Actions automatically",
  });
});

app.get("/hello", (req, res) => {
  res.status(200).send({
    msg: "Hello, This is Node js CI CD Devops project with docker and aws ec2 222",
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
