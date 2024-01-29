const express = require("express");
const { connection } = require("./db");
const { john } = require("./routes");

const app = express();
app.use(express.json());
app.use("/", john);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log("error");
    console.log(error);
  }
  console.log("server is running in 8000");
});
