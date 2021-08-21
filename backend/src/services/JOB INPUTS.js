
const db = require('../db/models');
const JOB INPUTSDBApi = require('../db/api/JOB INPUTS');

module.exports = class JOB INPUTSService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await JOB INPUTSDBApi.create(
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
      let JOB INPUTS = await JOB INPUTSDBApi.findBy(
        {id},
        {transaction},
      );

      if (!JOB INPUTS) {
        throw new ValidationError(
          'JOB INPUTSNotFound',
        );
      }

      await JOB INPUTSDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return JOB INPUTS;

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

      await JOB INPUTSDBApi.remove(
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

