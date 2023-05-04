const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Job_Company_Name: String,
    Job_Role: String,
    Job_Location: String,
    Job_Salary: Number,
    Job_Vacancy: String,
    Job_Eligibility: String,
    Job_Minimum_CGPA: Number,
    Job_Registration_Date: Date
}, { timestamps: true }); // this track timing details of document

const usermodel = mongoose.model("jobdata", userSchema);
module.exports = usermodel;