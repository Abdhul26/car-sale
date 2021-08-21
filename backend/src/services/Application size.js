
const db = require('../db/models');
const Application sizeDBApi = require('../db/api/Application size');

module.exports = class Application sizeService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await Application sizeDBApi.create(
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
      let Application size = await Application sizeDBApi.findBy(
        {id},
        {transaction},
      );

      if (!Application size) {
        throw new ValidationError(
          'Application sizeNotFound',
        );
      }

      await Application sizeDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return Application size;

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

      await Application sizeDBApi.remove(
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

