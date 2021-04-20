import express from "express";
// https://dev.to/hte305/simple-deploy-typescript-application-to-heroku-5b6g
const app = express();
const PORT = 8000;
app.get("/typescript", (req, res) => res.send("Express + TypeScript Server"));
app.use("*", (req, res) => {
  res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
