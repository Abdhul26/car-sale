
const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const JOB INPUTS = sequelize.define(
    'JOB INPUTS',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Hoistway Width (mm): {
        type: DataTypes.TEXT,
      
      },
      Hoistway Depth (mm): {
        type: DataTypes.TEXT,
      
      },
      Glass Door: {
        type: DataTypes.TEXT,
      
      },
      Opening Type: {
        type: DataTypes.TEXT,
      
      },
      No of Stops: {
        type: DataTypes.TEXT,
      
      },
      Minimum Travel  (mm) Based on Stops: {
        type: DataTypes.TEXT,
      
      },
      Maximum Travel (mm): {
        type: DataTypes.TEXT,
      
      },
      Travel (mm): {
        type: DataTypes.TEXT,
      
      },
      Minimum Overhead (mm): {
        type: DataTypes.TEXT,
      
      },
      Minimum Pit Depth (mm): {
        type: DataTypes.TEXT,
      
      },
      Overhead (mm): {
        type: DataTypes.TEXT,
      
      },
      Pit Depth (mm): {
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

  JOB INPUTS.associate = (db) => {

    db.JOB INPUTS.belongsTo(db.Application size, {
      as: 'Capacity (Person/Kg)',
      constraints: false,
    });

    db.JOB INPUTS.belongsTo(db.Application size, {
      as: 'Opening Width (mm)',
      constraints: false,
    });

    db.JOB INPUTS.belongsTo(db.Application size, {
      as: 'Car Inside Width',
      constraints: false,
    });

    db.JOB INPUTS.belongsTo(db.Application size, {
      as: 'Car Inside Depth',
      constraints: false,
    });

    db.JOB INPUTS.belongsTo(db.Application size, {
      as: 'Door Offset',
      constraints: false,
    });

    db.JOB INPUTS.belongsTo(db.Openning Value, {
      as: 'Speed (M/s)',
      constraints: false,
    });

    db.JOB INPUTS.belongsTo(db.Openning Value, {
      as: '"Opening Height (mm) & Clear Ceiling Height"',
      constraints: false,
    });


    db.JOB INPUTS.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.JOB INPUTS.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };



  return JOB INPUTS;
};

