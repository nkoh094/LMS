const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./config/db_config.js");
const app = express();
const path = require('path');

app.use(cors({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.join(__dirname, 'public', 'uploads')));

require("./routes/routes.js")(app);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

// //DB Models
const users = require("./modules/users/users_model");
const socialLogins = require("./modules/social_logins/social_logins_model");

let promiseArray = [];
// // sync db models
promiseArray.push(users.sync());
// promiseArray.push(productCategories.sync());

Promise.all(promiseArray)
  .then(() => {
    socialLogins.belongsTo(users);
    users.hasOne(socialLogins);
    socialLogins.sync();
  })
  .catch(err => {
    console.log("Table Sync Error: ", err);
  });

const PORT = process.env.HTTP_PORT || 8081;

app.listen(PORT, () => {
  console.log(`server runnning on http://localhost:${PORT}`);
});