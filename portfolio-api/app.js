const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendGrid/mail");
const app = express();


app.use(bodyParser.json());
app.use(cors());
//The headers that will allow API to use the data
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Origin", "Content-Type, Authorization");
    next();
});

//Routes
app.get("/api", (req, res, next) => {
    res.send("API Status: Running")
})

app.post("/api/email", (req, res, next) => {
    sendGrid.setApiKey("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");
    const msg = {
        to:"m_aguilar_2011@yahoo.com",
        from: req.body.email,
        subject: "Website Contact",
        text: req.body.message   
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success:true                
            });

        }).catch(err => {

            console.log("error: ", err);
            res.status(401).json({
                success:false
            });

        });
    
});

app.listen(3030, "0.0.0.0")