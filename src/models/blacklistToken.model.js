module.exports = (sequelize, DataTypes) => {
    const BlacklistToken = sequelize.define('BlacklistToken', {
      token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
    return BlacklistToken;
  };