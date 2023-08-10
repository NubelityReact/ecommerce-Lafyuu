import express, { Request, Response } from "express";
import config from "./config/config";

const app = express();
const PORT = config.port;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
