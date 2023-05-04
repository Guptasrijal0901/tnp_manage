const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Student_Name: String,
    JobID: Number,
    Branch: String,
    CGPA: Number,
    passoutYear: Number,
    emailID: String,
    phonenumber: Number,
    Home_Address: String,
    Job_Status: String,
}, { timestamps: true }); // this track timing details of document

const usermodel = mongoose.model("studentdata ", userSchema);
module.exports = usermodel;