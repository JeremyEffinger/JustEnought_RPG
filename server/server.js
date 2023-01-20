import express, { json } from "express";
const PORT = 5000;
const server = express();

server.use(express.json());

server.get("/api/v1", (req, res) => {
  res.json({ message: "Hello!" });
});

server.use((req, res, next) => {
  res.contentType("text/plain").status(404).send("Not Found");
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

server.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
