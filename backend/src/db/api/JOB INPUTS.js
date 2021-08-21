
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class JOB INPUTSDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const JOB INPUTS = await db.JOB INPUTS.create(
  {
  id: data.id || undefined,
  Hoistway Width (mm): data.Hoistway Width (mm)
    ||
    null,
  Hoistway Depth (mm): data.Hoistway Depth (mm)
    ||
    null,
  Glass Door: data.Glass Door
    ||
    null,
  Opening Type: data.Opening Type
    ||
    null,
  No of Stops: data.No of Stops
    ||
    null,
  Minimum Travel  (mm) Based on Stops: data.Minimum Travel  (mm) Based on Stops
    ||
    null,
  Maximum Travel (mm): data.Maximum Travel (mm)
    ||
    null,
  Travel (mm): data.Travel (mm)
    ||
    null,
  Minimum Overhead (mm): data.Minimum Overhead (mm)
    ||
    null,
  Minimum Pit Depth (mm): data.Minimum Pit Depth (mm)
    ||
    null,
  Overhead (mm): data.Overhead (mm)
    ||
    null,
  Pit Depth (mm): data.Pit Depth (mm)
    ||
    null,
  
  importHash: data.importHash || null,
  createdById: currentUser.id,
  updatedById: currentUser.id,
  },
  { transaction },
  );

  
    await JOB INPUTS.setCapacity (Person/Kg)(data.Capacity (Person/Kg) || null, {
    transaction,
    });
  
    await JOB INPUTS.setOpening Width (mm)(data.Opening Width (mm) || null, {
    transaction,
    });
  
    await JOB INPUTS.setCar Inside Width(data.Car Inside Width || null, {
    transaction,
    });
  
    await JOB INPUTS.setCar Inside Depth(data.Car Inside Depth || null, {
    transaction,
    });
  
    await JOB INPUTS.setDoor Offset(data.Door Offset || null, {
    transaction,
    });
  
    await JOB INPUTS.setSpeed (M/s)(data.Speed (M/s) || null, {
    transaction,
    });
  
    await JOB INPUTS.set"Opening Height (mm) & Clear Ceiling Height"(data."Opening Height (mm) & Clear Ceiling Height" || null, {
    transaction,
    });
  

  return JOB INPUTS;
  }


  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const JOB INPUTS = await db.JOB INPUTS.findByPk(id, {
      transaction,
    });

    await JOB INPUTS.update(
      {
Hoistway Width (mm): data.Hoistway Width (mm)
        ||
        null,
Hoistway Depth (mm): data.Hoistway Depth (mm)
        ||
        null,
Glass Door: data.Glass Door
        ||
        null,
Opening Type: data.Opening Type
        ||
        null,
No of Stops: data.No of Stops
        ||
        null,
Minimum Travel  (mm) Based on Stops: data.Minimum Travel  (mm) Based on Stops
        ||
        null,
Maximum Travel (mm): data.Maximum Travel (mm)
        ||
        null,
Travel (mm): data.Travel (mm)
        ||
        null,
Minimum Overhead (mm): data.Minimum Overhead (mm)
        ||
        null,
Minimum Pit Depth (mm): data.Minimum Pit Depth (mm)
        ||
        null,
Overhead (mm): data.Overhead (mm)
        ||
        null,
Pit Depth (mm): data.Pit Depth (mm)
        ||
        null,

        updatedById: currentUser.id,
      },
      {transaction},
    );


    await JOB INPUTS.setCapacity (Person/Kg)(data.Capacity (Person/Kg) || null, {
      transaction,
    });

    await JOB INPUTS.setOpening Width (mm)(data.Opening Width (mm) || null, {
      transaction,
    });

    await JOB INPUTS.setCar Inside Width(data.Car Inside Width || null, {
      transaction,
    });

    await JOB INPUTS.setCar Inside Depth(data.Car Inside Depth || null, {
      transaction,
    });

    await JOB INPUTS.setDoor Offset(data.Door Offset || null, {
      transaction,
    });

    await JOB INPUTS.setSpeed (M/s)(data.Speed (M/s) || null, {
      transaction,
    });

    await JOB INPUTS.set"Opening Height (mm) & Clear Ceiling Height"(data."Opening Height (mm) & Clear Ceiling Height" || null, {
      transaction,
    });


    return JOB INPUTS;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const JOB INPUTS = await db.JOB INPUTS.findByPk(id, options);

    await JOB INPUTS.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await JOB INPUTS.destroy({
      transaction
    });

    return JOB INPUTS;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const JOB INPUTS = await db.JOB INPUTS.findOne(
      { where },
      { transaction },
    );

    if (!JOB INPUTS) {
      return JOB INPUTS;
    }

    const output = JOB INPUTS.get({plain: true});

    output.Capacity (Person/Kg) = await JOB INPUTS.getCapacity (Person/Kg)({
      transaction
    });

    output.Opening Width (mm) = await JOB INPUTS.getOpening Width (mm)({
      transaction
    });

    output.Car Inside Width = await JOB INPUTS.getCar Inside Width({
      transaction
    });

    output.Car Inside Depth = await JOB INPUTS.getCar Inside Depth({
      transaction
    });

    output.Door Offset = await JOB INPUTS.getDoor Offset({
      transaction
    });

    output.Speed (M/s) = await JOB INPUTS.getSpeed (M/s)({
      transaction
    });

    output."Opening Height (mm) & Clear Ceiling Height" = await JOB INPUTS.get"Opening Height (mm) & Clear Ceiling Height"({
      transaction
    });


    return output;
  }

  static async findAll(filter, options) {
    var limit = 0;
    var offset = 0;
    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [

      {
        model: db.Application size,
        as: 'Capacity (Person/Kg)',
      },

      {
        model: db.Application size,
        as: 'Opening Width (mm)',
      },

      {
        model: db.Application size,
        as: 'Car Inside Width',
      },

      {
        model: db.Application size,
        as: 'Car Inside Depth',
      },

      {
        model: db.Application size,
        as: 'Door Offset',
      },

      {
        model: db.Openning Value,
        as: 'Speed (M/s)',
      },

      {
        model: db.Openning Value,
        as: '"Opening Height (mm) & Clear Ceiling Height"',
      },

    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }


      if (filter.Hoistway Width (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Hoistway Width (mm)',
            filter.Hoistway Width (mm),
          ),
        };
      }

      if (filter.Hoistway Depth (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Hoistway Depth (mm)',
            filter.Hoistway Depth (mm),
          ),
        };
      }

      if (filter.Glass Door) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Glass Door',
            filter.Glass Door,
          ),
        };
      }

      if (filter.Opening Type) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Opening Type',
            filter.Opening Type,
          ),
        };
      }

      if (filter.No of Stops) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'No of Stops',
            filter.No of Stops,
          ),
        };
      }

      if (filter.Minimum Travel  (mm) Based on Stops) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Minimum Travel  (mm) Based on Stops',
            filter.Minimum Travel  (mm) Based on Stops,
          ),
        };
      }

      if (filter.Maximum Travel (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Maximum Travel (mm)',
            filter.Maximum Travel (mm),
          ),
        };
      }

      if (filter.Travel (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Travel (mm)',
            filter.Travel (mm),
          ),
        };
      }

      if (filter.Minimum Overhead (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Minimum Overhead (mm)',
            filter.Minimum Overhead (mm),
          ),
        };
      }

      if (filter.Minimum Pit Depth (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Minimum Pit Depth (mm)',
            filter.Minimum Pit Depth (mm),
          ),
        };
      }

      if (filter.Overhead (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Overhead (mm)',
            filter.Overhead (mm),
          ),
        };
      }

      if (filter.Pit Depth (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'JOB INPUTS',
            'Pit Depth (mm)',
            filter.Pit Depth (mm),
          ),
        };
      }


      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active:
            filter.active === true ||
            filter.active === 'true',
        };
      }


      if (filter.Capacity (Person/Kg)) {
        var listItems = filter.Capacity (Person/Kg).split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          Capacity (Person/Kg)Id: {[Op.or]: listItems}
        };
      }

      if (filter.Opening Width (mm)) {
        var listItems = filter.Opening Width (mm).split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          Opening Width (mm)Id: {[Op.or]: listItems}
        };
      }

      if (filter.Car Inside Width) {
        var listItems = filter.Car Inside Width.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          Car Inside WidthId: {[Op.or]: listItems}
        };
      }

      if (filter.Car Inside Depth) {
        var listItems = filter.Car Inside Depth.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          Car Inside DepthId: {[Op.or]: listItems}
        };
      }

      if (filter.Door Offset) {
        var listItems = filter.Door Offset.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          Door OffsetId: {[Op.or]: listItems}
        };
      }

      if (filter.Speed (M/s)) {
        var listItems = filter.Speed (M/s).split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          Speed (M/s)Id: {[Op.or]: listItems}
        };
      }

      if (filter."Opening Height (mm) & Clear Ceiling Height") {
        var listItems = filter."Opening Height (mm) & Clear Ceiling Height".split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          "Opening Height (mm) & Clear Ceiling Height"Id: {[Op.or]: listItems}
        };
      }


      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = await db.JOB INPUTS.findAndCountAll(
      {
        where,
        include,
        limit: limit ? Number(limit) : undefined,
        offset: offset ? Number(offset) : undefined,
        order: orderBy
          ? [orderBy.split('_')]
          : [['createdAt', 'DESC']],
        transaction,
      },
    );

//    rows = await this._fillWithRelationsAndFilesForRows(
//      rows,
//      options,
//    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike(
            'JOB INPUTS',
            'Hoistway Width (mm)',
            query,
          ),
        ],
      };
    }

    const records = await db.JOB INPUTS.findAll({
      attributes: [ 'id', 'Hoistway Width (mm)' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['Hoistway Width (mm)', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.Hoistway Width (mm),
    }));
  }


};

