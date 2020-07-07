module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  User.associate = (models) => {
    User.hasMany(models.Item);
  }
  return User;
}