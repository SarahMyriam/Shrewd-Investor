
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

   // Stock.associate = function(models) {
   //    // We're saying that a Stock should belong to a User
   //    // A Stock can't be created without a User due to the foreign key constraint
   //    Stock.belongsTo(models.User, {
   //       foreignKey: {
   //          allowNull: false
   //       }
   //    });
   // };

   return Stock;
};