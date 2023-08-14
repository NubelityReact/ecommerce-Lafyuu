import express, { Request, Response } from "express";
import config from "./config/config";
import startDBConnection from "./db";
import { UserRouter } from "./routes";

const app = express();
const PORT = config.port;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Api Lafyuu");
});

app.use("/users", UserRouter);

startDBConnection();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
