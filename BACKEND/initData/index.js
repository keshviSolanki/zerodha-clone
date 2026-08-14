//data base ma initilize krvanu kam kre pachhd thi vadhu kaik data add krvo hoy to

const mongoose = require("mongoose");
const holdingData = require("./holdingData.js");
const holdingModel = require("../models/HoldingModel.js");
const positionData = require("./positionData.js");
const positionModel = require("../models/PositionModel.js");
const orderData = require("./orderData.js");
const orderModel = require("../models/OrderModel.js");
const mongo_url = "mongodb://127.0.0.1:27017/zerodha";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  await holdingModel.deleteMany({});
  await holdingModel.insertMany(holdingData.holdingData);
  await positionModel.deleteMany({});
  await positionModel.insertMany(positionData.positionData);
  await orderModel.deleteMany({});
  await orderModel.insertMany(orderData.orderData);
  console.log("data was initilizes");
};

initDB();
