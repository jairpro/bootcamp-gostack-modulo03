/* eslint-disable linebreak-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'updated_at', {
      type: Sequelize.DATE,
    });
  },
};
