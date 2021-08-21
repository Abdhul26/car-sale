
const db = require('../db/models');
const Openning ValueDBApi = require('../db/api/Openning Value');

module.exports = class Openning ValueService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await Openning ValueDBApi.create(
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
      let Openning Value = await Openning ValueDBApi.findBy(
        {id},
        {transaction},
      );

      if (!Openning Value) {
        throw new ValidationError(
          'Openning ValueNotFound',
        );
      }

      await Openning ValueDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return Openning Value;

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

      await Openning ValueDBApi.remove(
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

