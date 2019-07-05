const express = require("express");
const mailer = require("express-mailer");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mailer.extend(app, {
    from: "hello@thenorthcode.com",
    host: 'thenorthcode.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: 'hola@thenorthcode.com',
      pass: '#consu2019'
    }
});

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/send", (req, res) => {
    app.mailer.send("email", {
        to: "hola@thenorthcode.com",
        subject: "Hello from Website",
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    }, (err, message) => {
        if(err) {
            res.status(500).send("Error sending email");
        } else {
            res.send('ok');
        }
    })
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname+"/index.html"));
})

app.listen(3000, () => console.log("running"));