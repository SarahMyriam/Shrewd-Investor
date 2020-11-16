
// Creating our Stock model
module.exports = function (sequelize, DataTypes) {
   const Stock = sequelize.define("Stock", {
      // The email cannot be null, and must be a proper email before creation
      name: {
         type: DataTypes.STRING
      },
      // The password cannot be null
      symbol: {
         type: DataTypes.STRING
      },
      price: {
         type: DataTypes.INTEGER
      },
      changePercent: {
         type: DataTypes.DECIMAL(10, 2)
      }
   });

   return Stock;
};