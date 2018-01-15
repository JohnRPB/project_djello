var express = require("express");
var router = express.Router();
let models = require("./../models");
let Board = models.Board;
let User = models.User;
// let sequelize = models.sequelize;

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("-------------------------------- HEY -------------------------------");
  console.log("Board: ", Board);
  console.log("req.params: ", req.params);
  console.log("req.query: ", req.query);
  
  Board.findAll({
    include: [
      {
        model: User,
        where: {
          id: Number(req.query.user)
        }
      }
    ]
  })
    .then(boards => {
      res.status(200).send(boards);
    })
    .catch(e => {
      console.log(e);
      res.status(500).send(e.stack)
    });
});

module.exports = router;
