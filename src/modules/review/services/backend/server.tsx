console.log("Server is starting");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const transporter = nodemailer.createTransport({
    host: 'mail.raks-pay.com',
    port: 465,
    secure: true,
    auth: {
        user: 'info@raks-pay.com',
        pass: '+9_L3Ru82vJo',
    },
});
app.post("/api/send", (req: any, res: any) => {
    console.log(req)
    const mailOptions = {
        from: 'info@raks-pay.com',
        to: 'allahverdiyev.ismayl@mail.ru',
        subject: "req.body.subject",
        html: "req.body.message"
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error: any, info: any) => {
        console.log(info)
        if (error) {
            return res.status(500).send(error);
        }
        res.status(200).send("Email sent successfully");
    });
});
const port = 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));