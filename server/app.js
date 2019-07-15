const express = require("express");
const mailer = require("express-mailer");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mailer.extend(app, {
    from: "hola@thenorthcode.com",
    host: 'thenorthcode.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: 'hola@thenorthcode.com',
      pass: '#consu2019'
    }
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
            app.mailer.send("thankyou", {
                to: req.body.email,
                subject: `Thanks for Contacting us ${req.body.name}!`,
            }, (err, message) => {
                if(err) console.log(err);
            });
        }
    })
});

app.listen(3000, () => console.log("running"));