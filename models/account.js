//設定Account Model的account document存入資料
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Account", accountSchema);
