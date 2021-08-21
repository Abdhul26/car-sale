
const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const MAIN INPUTS = sequelize.define(
    'MAIN INPUTS',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Enquiry No: {
        type: DataTypes.TEXT,
      
      },
      Project Name: {
        type: DataTypes.TEXT,
      
      },
      CODE: {
        type: DataTypes.INTEGER,
      
      },
      PRODUCT TYPE: {
        type: DataTypes.ENUM,
      
        values: [
          "ZEXIA-M (WITH MR)",
          "REXIA-M (WITHOUT MR)"
        ],

      },
      ENQUIRY OPTION: {
        type: DataTypes.ENUM,
      
        values: [
          "CAR SIZE FIXED "
        ],

      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );

  MAIN INPUTS.associate = (db) => {


    db.MAIN INPUTS.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.MAIN INPUTS.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };



  return MAIN INPUTS;
};

