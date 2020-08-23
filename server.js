const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const sesClient = require("./ses-client");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // call sesClient to send an email
  sesClient.sendEmail(
    "to address",
    "Hey! Welcome",
    "the link is https://attacomsian.com/blog/amazon-ses-integration-nodejs/"
  );

  res.send("Email is sent!");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
