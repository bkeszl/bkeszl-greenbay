const db = require('./index.js');
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    sellable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buyerName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  Item.associate = (models) => {
    Item.belongsTo(models.User, {onDelete: "cascade"});
  };

  return Item;
}