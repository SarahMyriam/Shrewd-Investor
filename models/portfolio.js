const orm = require("../config/orm.js");

const portfolio = {
  all: function(cb) {
    orm.all("stocks", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("stocks", [
      "stock_name", "portfolio"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("stocks", {
      portfolio: true
    }, condition, cb);
  }
};

module.exports = portfolio;