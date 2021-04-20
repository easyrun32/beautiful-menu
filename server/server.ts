import express from "express";
import compression from "compression";
import cors from "cors";
import path from "path";
const app = express();
app.use(compression());
app.use(cors());

const PORT: string | number = process.env.PORT || 5000;
app.get("/test", (req, res) => {
  res.send({ typescript: "hello" });
});
//client/build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(PORT, () =>
  console.log(
    `Typescript Node server started at \n\nhttp://localhost:${PORT}/ `
  )
);
