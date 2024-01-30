
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type:Sequelize.STRING,
      primaryKey:true,
      allowNull:false
    },
    email: {
      type:Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    registration_attribution: {
      type:Sequelize.STRING
    },
    email_verified: {
      type:Sequelize.BOOLEAN
    },
    metadata: {
      type:Sequelize.JSONB
    },
    nickname:{
      type:Sequelize.STRING,
    }
  });

  return User;
};
