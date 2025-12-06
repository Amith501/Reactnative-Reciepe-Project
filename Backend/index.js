import express from "express";
import userRoute from "./RoutesUser";
import ReciepeRoute from "./Routes/reciepe";
import connectDb from "./Config/db";
const app = express("");

app.use(express.json());
app.use("api/", userRoute);
app.use("api/", ReciepeRoute);
const PORT = 3000 || process.env.PORT;
connectDb();
app.get("/", (req, res) => {
  res.send("Hello world ");
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
