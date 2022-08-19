function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

const express = require("express");
const path = require("path");
const app = express();
app.use(requireHTTPS);
app.use(express.static(__dirname + '\\dist\\web422-a4'));
app.use(express.static(__dirname + '/angular-build'));


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + '\\src\\index.html'));
});

app.listen(process.env.PORT || 8080);

