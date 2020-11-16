// const orm = require("./orm.js");

// const portfolio = {
//    all: function(cb) {
//       orm.all("stocks", (res) => {
//          cb(res);
//       });
//    },
//    create: function(name, cb) {
//       orm.create("stocks", [
//          "stock_name", "portfolio"
//       ], [
//          name, false
//       ], cb);
//    },
//    update: function(id, cb) {
//       const condition = "id=" + id;
//       orm.update("stocks", {
//          portfolio: true
//       }, condition, cb);
//    }
// };

// module.exports = portfolio;