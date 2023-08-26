import express, { Request, Response } from "express";

const app = express();

app.use("/", (req: Request, res: Response) => {
  res.send("we are running the api");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
