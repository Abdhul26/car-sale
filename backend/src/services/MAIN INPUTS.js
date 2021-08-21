
const db = require('../db/models');
const MAIN INPUTSDBApi = require('../db/api/MAIN INPUTS');

module.exports = class MAIN INPUTSService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await MAIN INPUTSDBApi.create(
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };
  static async update(data, id, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      let MAIN INPUTS = await MAIN INPUTSDBApi.findBy(
        {id},
        {transaction},
      );

      if (!MAIN INPUTS) {
        throw new ValidationError(
          'MAIN INPUTSNotFound',
        );
      }

      await MAIN INPUTSDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return MAIN INPUTS;

    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };

  static async remove(id, currentUser) {
    const transaction = await db.sequelize.transaction();

    try {
      if (currentUser.role !== 'admin') {
        throw new ValidationError(
          'errors.forbidden.message',
        );
      }

      await MAIN INPUTSDBApi.remove(
        id,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};

