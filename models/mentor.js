// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
    var Mentor = sequelize.define("mentor", {
        name: {
            type: DataTypes.STRING,
            required: true,
            validate: {
                len: [1]
            }
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