import express from "express";
// https://dev.to/hte305/simple-deploy-typescript-application-to-heroku-5b6g
const app = express();
const PORT = 8000;
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
