
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Openning ValueDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const Openning Value = await db.Openning Value.create(
  {
  id: data.id || undefined,
  Concatenate: data.Concatenate
    ||
    null,
  Opennning Height(mm)&Clear Ceiling Height: data.Opennning Height(mm)&Clear Ceiling Height
    ||
    null,
  speed (mm): data.speed (mm)
    ||
    null,
  OverHeas *** mm: data.OverHeas *** mm
    ||
    null,
  Pit depth: data.Pit depth
    ||
    null,
  
  importHash: data.importHash || null,
  createdById: currentUser.id,
  updatedById: currentUser.id,
  },
  { transaction },
  );

  

  return Openning Value;
  }


  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const Openning Value = await db.Openning Value.findByPk(id, {
      transaction,
    });

    await Openning Value.update(
      {
Concatenate: data.Concatenate
        ||
        null,
Opennning Height(mm)&Clear Ceiling Height: data.Opennning Height(mm)&Clear Ceiling Height
        ||
        null,
speed (mm): data.speed (mm)
        ||
        null,
OverHeas *** mm: data.OverHeas *** mm
        ||
        null,
Pit depth: data.Pit depth
        ||
        null,

        updatedById: currentUser.id,
      },
      {transaction},
    );



    return Openning Value;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const Openning Value = await db.Openning Value.findByPk(id, options);

    await Openning Value.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await Openning Value.destroy({
      transaction
    });

    return Openning Value;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const Openning Value = await db.Openning Value.findOne(
      { where },
      { transaction },
    );

    if (!Openning Value) {
      return Openning Value;
    }

    const output = Openning Value.get({plain: true});


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


      if (filter.Concatenate) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'Openning Value',
            'Concatenate',
            filter.Concatenate,
          ),
        };
      }

      if (filter.speed (mm)) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'Openning Value',
            'speed (mm)',
            filter.speed (mm),
          ),
        };
      }

      if (filter.OverHeas *** mm) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'Openning Value',
            'OverHeas *** mm',
            filter.OverHeas *** mm,
          ),
        };
      }

      if (filter.Pit depth) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'Openning Value',
            'Pit depth',
            filter.Pit depth,
          ),
        };
      }

      if (filter.Opennning Height(mm)&Clear Ceiling HeightRange) {
        const [start, end] = filter.Opennning Height(mm)&Clear Ceiling HeightRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            Opennning Height(mm)&Clear Ceiling Height: {
              ...where.Opennning Height(mm)&Clear Ceiling Height,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            Opennning Height(mm)&Clear Ceiling Height: {
              ...where.Opennning Height(mm)&Clear Ceiling Height,
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

    let { rows, count } = await db.Openning Value.findAndCountAll(
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
            'Openning Value',
            'Concatenate',
            query,
          ),
        ],
      };
    }

    const records = await db.Openning Value.findAll({
      attributes: [ 'id', 'Concatenate' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['Concatenate', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.Concatenate,
    }));
  }


};

