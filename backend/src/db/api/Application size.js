
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Application sizeDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const Application size = await db.Application size.create(
  {
  id: data.id || undefined,
  Capacity(person/kg): data.Capacity(person/kg)
    ||
    null,
  Openning Types: data.Openning Types
    ||
    null,
  Openning Width(mm): data.Openning Width(mm)
    ||
    null,
  Car Inside Width: data.Car Inside Width
    ||
    null,
  Car Inside Depth: data.Car Inside Depth
    ||
    null,
  Door Offset: data.Door Offset
    ||
    null,
  
  importHash: data.importHash || null,
  createdById: currentUser.id,
  updatedById: currentUser.id,
  },
  { transaction },
  );

  

  return Application size;
  }


  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const Application size = await db.Application size.findByPk(id, {
      transaction,
    });

    await Application size.update(
      {
Capacity(person/kg): data.Capacity(person/kg)
        ||
        null,
Openning Types: data.Openning Types
        ||
        null,
Openning Width(mm): data.Openning Width(mm)
        ||
        null,
Car Inside Width: data.Car Inside Width
        ||
        null,
Car Inside Depth: data.Car Inside Depth
        ||
        null,
Door Offset: data.Door Offset
        ||
        null,

        updatedById: currentUser.id,
      },
      {transaction},
    );



    return Application size;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const Application size = await db.Application size.findByPk(id, options);

    await Application size.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await Application size.destroy({
      transaction
    });

    return Application size;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const Application size = await db.Application size.findOne(
      { where },
      { transaction },
    );

    if (!Application size) {
      return Application size;
    }

    const output = Application size.get({plain: true});


    return output;
  }

  static async findAll(filter, options) {
    var limit = 0;
    var offset = 0;
    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [

    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }


      if (filter.Capacity(person/kg)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'Application size',
            'Capacity(person/kg)',
            filter.Capacity(person/kg),
          ),
        };
      }

      if (filter.Openning Types) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'Application size',
            'Openning Types',
            filter.Openning Types,
          ),
        };
      }

      if (filter.Openning Width(mm)Range) {
        const [start, end] = filter.Openning Width(mm)Range;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            Openning Width(mm): {
              ...where.Openning Width(mm),
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            Openning Width(mm): {
              ...where.Openning Width(mm),
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.Car Inside WidthRange) {
        const [start, end] = filter.Car Inside WidthRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            Car Inside Width: {
              ...where.Car Inside Width,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            Car Inside Width: {
              ...where.Car Inside Width,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.Car Inside DepthRange) {
        const [start, end] = filter.Car Inside DepthRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            Car Inside Depth: {
              ...where.Car Inside Depth,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            Car Inside Depth: {
              ...where.Car Inside Depth,
              [Op.lte]: end,
            },
          };
        }
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


      if (filter.Door Offset) {
        where = {
          ...where,
          Door Offset: filter.Door Offset,
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

    let { rows, count } = await db.Application size.findAndCountAll(
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
            'Application size',
            'Capacity(person/kg)',
            query,
          ),
        ],
      };
    }

    const records = await db.Application size.findAll({
      attributes: [ 'id', 'Capacity(person/kg)' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['Capacity(person/kg)', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.Capacity(person/kg),
    }));
  }


};

