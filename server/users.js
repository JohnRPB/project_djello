var express = require("express");
var router = express.Router();
let models = require("./../models");
let User = models.User;
// let sequelize = models.sequelize;

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("-------------------------------- HEY -------------------------------");
  console.log("User: ", User);
  
  User.findAll({
  })
    .then(users => {
      res.status(200).send(users);
    })
    .catch(e => {
      console.log(e);
      res.status(500).send(e.stack)
    });
});

module.exports = router;
