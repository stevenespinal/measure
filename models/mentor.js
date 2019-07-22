module.exports = function(sequelize, DataTypes) {
  var Mentor = sequelize.define("Mentor", {
    name: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        len: [1]
      }
    },
    img: {
      type: DataTypes.LONGBLOB,
      required: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        len: [1],
        isEmail: true
      }
    }
  });
  return Mentor;
};
