const { model } = require("mongoose");

const { UserinfoSchema } = require("../schemas/UserinfoSchema");

const UserinfoModel = new model("userinfo", UserinfoSchema);

module.exports = UserinfoModel;
