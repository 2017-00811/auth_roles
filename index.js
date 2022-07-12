const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const authRouter = require("./authRouter");
const app = express();

app.use(express.json());
app.use("/auth", authRouter);
const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Alex:Alex123@cluster0.nenb5.mongodb.net/auth_roles?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
