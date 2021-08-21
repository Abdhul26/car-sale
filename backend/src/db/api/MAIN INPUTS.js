
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class MAIN INPUTSDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const MAIN INPUTS = await db.MAIN INPUTS.create(
  {
  id: data.id || undefined,
  Enquiry No: data.Enquiry No
    ||
    null,
  Project Name: data.Project Name
    ||
    null,
  CODE: data.CODE
    ||
    null,
  PRODUCT TYPE: data.PRODUCT TYPE
    ||
    null,
  ENQUIRY OPTION: data.ENQUIRY OPTION
    ||
    null,
  
  importHash: data.importHash || null,
  createdById: currentUser.id,
  updatedById: currentUser.id,
  },
  { transaction },
  );

  

  return MAIN INPUTS;
  }


  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const MAIN INPUTS = await db.MAIN INPUTS.findByPk(id, {
      transaction,
    });

    await MAIN INPUTS.update(
      {
Enquiry No: data.Enquiry No
        ||
        null,
Project Name: data.Project Name
        ||
        null,
CODE: data.CODE
        ||
        null,
PRODUCT TYPE: data.PRODUCT TYPE
        ||
        null,
ENQUIRY OPTION: data.ENQUIRY OPTION
        ||
        null,

        updatedById: currentUser.id,
      },
      {transaction},
    );



    return MAIN INPUTS;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const MAIN INPUTS = await db.MAIN INPUTS.findByPk(id, options);

    await MAIN INPUTS.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await MAIN INPUTS.destroy({
      transaction
    });

    return MAIN INPUTS;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const MAIN INPUTS = await db.MAIN INPUTS.findOne(
      { where },
      { transaction },
    );

    if (!MAIN INPUTS) {
      return MAIN INPUTS;
    }

    const output = MAIN INPUTS.get({plain: true});


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


      if (filter.Enquiry No) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'MAIN INPUTS',
            'Enquiry No',
            filter.Enquiry No,
          ),
        };
      }

      if (filter.Project Name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'MAIN INPUTS',
            'Project Name',
            filter.Project Name,
          ),
        };
      }

      if (filter.CODERange) {
        const [start, end] = filter.CODERange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            CODE: {
              ...where.CODE,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            CODE: {
              ...where.CODE,
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


      if (filter.PRODUCT TYPE) {
        where = {
          ...where,
          PRODUCT TYPE: filter.PRODUCT TYPE,
        };
      }

      if (filter.ENQUIRY OPTION) {
        where = {
          ...where,
          ENQUIRY OPTION: filter.ENQUIRY OPTION,
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

    let { rows, count } = await db.MAIN INPUTS.findAndCountAll(
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
            'MAIN INPUTS',
            'Enquiry No',
            query,
          ),
        ],
      };
    }

    const records = await db.MAIN INPUTS.findAll({
      attributes: [ 'id', 'Enquiry No' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['Enquiry No', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.Enquiry No,
    }));
  }


};

