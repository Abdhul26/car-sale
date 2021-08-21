
const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const Application size = sequelize.define(
    'Application size',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Capacity(person/kg): {
        type: DataTypes.TEXT,
      
      },
      Openning Types: {
        type: DataTypes.TEXT,
      
      },
      Openning Width(mm): {
        type: DataTypes.INTEGER,
      
      },
      Car Inside Width: {
        type: DataTypes.INTEGER,
      
      },
      Car Inside Depth: {
        type: DataTypes.INTEGER,
      
      },
      Door Offset: {
        type: DataTypes.ENUM,
      
        values: [
          "Without door",
          "25mm door offset"
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

  Application size.associate = (db) => {


    db.Application size.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.Application size.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };



  return Application size;
};

