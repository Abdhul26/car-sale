
const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const Openning Value = sequelize.define(
    'Openning Value',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Concatenate: {
        type: DataTypes.TEXT,
      
      },
      Opennning Height(mm)&Clear Ceiling Height: {
        type: DataTypes.INTEGER,
      
      },
      speed (mm): {
        type: DataTypes.TEXT,
      
      },
      OverHeas *** mm: {
        type: DataTypes.TEXT,
      
      },
      Pit depth: {
        type: DataTypes.TEXT,
      
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

  Openning Value.associate = (db) => {


    db.Openning Value.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.Openning Value.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };



  return Openning Value;
};

