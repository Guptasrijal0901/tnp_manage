const express = require("express");
const { connectDatabase } = require("./jobpost ");
const app = express();
app.use(express.json());
const JOB_POST = require("./models/job");
const STUDENT_DATA = require("./models/registration");

//create operation 1
app.post("/api/jobpost", async (req, res) => {
    try {
        if (Job_Company_Name.count > 1) {
            return res.json({ sucess: false, message: " you cannot register more than 1 times " })
        }
        console.log(req.body);
        const jobpost = {
            Job_Company_Name: req.body.Name,
            Job_Role: req.body.Role,
            Job_Location: req.body.Location,
            Job_Salary: req.body.Salary,
            Job_Vacancy: req.body.Vacancy,
            Job_Eligibility: req.body.Eligibility,
            Job_Minimum_CGPA: req.body.CGPA,
            Job_Registration_Date: req.body.Date,
        };

        // if (jobpost.Job_Company_Name > 1) {
        //     return res.json({ sucess: false, message: " you cannot register more than 1 times " })
        // }
        const addjob = new JOB_POST(jobpost);
        await addjob.save();
        return res.json({
            success: true,
            message: "company added"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
    }
});
// if (jobpost.Job_Company_Name > 1) {
//     return res.json({ sucess: false, message: " you cannot register more than 2 times " })
// }
//create operation 2
app.post("/api/studentdata", async (req, res) => {
    try {

        console.log(req.body);
        const student_details = {
            Student_Name: req.body.Name,
            JobID: req.body.id,
            Branch: req.body.Branch,
            CGPA: req.body.CGPA,
            passoutYear: req.body.passoutYear,
            emailID: req.body.emailID,
            phonenumber: req.body.number,
            Home_Address: req.body.adress,
            Job_Status: req.body.status,
        };
        const addstudent = new STUDENT_DATA(student_details);
        await addstudent.save();
        return res.json({
            sucess: true,
            message: "student registered"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
    }
})

connectDatabase();
app.listen(8000, () => {
    console.log("Server is running at port 8000");
});
