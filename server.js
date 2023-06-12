const path = require("path")
const express = require("express");
const router = express.router;
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.resolve(__dirname, "./build")))
app.use(cors());
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json({message: "Hello :) From Server"})
});

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASS
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
})

app.post("/api/contact", bodyParser.urlencoded({extended: false}), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`
    }
    contactEmail.sendMail(mail, (e) => {
        if (e) {
            res.json(e);
        } else {
            res.json({ code: 200, status: "Sent Succesfully :D"});
        }
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./build", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});