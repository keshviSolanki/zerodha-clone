const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors()); // allow kre frontend requests ne

app.use(express.json());

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

//MONGODB-url mate
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const mongoURL = process.env.MONGO_URL;

//models
const HoldingModel = require("./models/HoldingModel");
const PositionModel = require("./models/PositionModel");
const OrderModel = require("./models/OrderModel");
const UserinfoModel = require("./models/userinfoModel");

//data db ma chhe tene dashboard ma fatch krva leva mate db mathi
app.get("/allholdings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allpositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

//new order k buy krva mate
app.post("/newOrder", async (req, res) => {
  //   console.log("BODY:", req.body); // add this
  try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving order");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserinfoModel.FindOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    //jwt == refress kri toy browser ne khabar rahe k user logged in chhe refres krt pachhu log in na krvu pde tna mate use thay
    //token banavse jo correct hse to browser ma info store krva auto send thse cookie server mathi
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "id",
    });

    //token cookie ne pass thse - cokie - auto send small storage in bowser by server
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "login successfull",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

app.listen(PORT, () => {
  console.log("app is started");
  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("DB connected ✅");
    })
    .catch((err) => {
      console.log(err);
    });
});

// bcryptjs & jsonwebtoken instaal kri lidhu chhe npm thi terminal ma
