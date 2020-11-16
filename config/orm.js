// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

const connection = require("./connection.js");

function printQuestionMarks(num) {
   const arr = [];

   for (let i = 0; i < num; i++) {
      arr.push("?");
   }

   return arr.toString();
}

function objToSql(ob) {
   // column1=value, column2=value2,...
   const arr = [];

   for (const key in ob) {
      arr.push(key + "=" + ob[key]);
   }

   return arr.toString();
}

const orm = {
   all: function(tableInput, cb) {
      const queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, (err, result) => {
         if (err) {
            throw err;
         }
         cb(result);
      });
   },
   // vals is an array of values that we want to save to cols
   // cols are the columns we want to insert the values into
   create: function(table, cols, vals, cb) {
      let queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, (err, result) => {
         if (err) {
            throw err;
         }
         cb(result);
      });
   },
   // objColVals would be the columns and values that you want to update
   // an example of objColVals would be {name: panther, sleepy: true}
   update: function(table, objColVals, condition, cb) {
      let queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, (err, result) => {
         if (err) {
            throw err;
         }
         cb(result);
      });
   }
};

module.exports = orm;
