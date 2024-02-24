const { INTEGER } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        },
        onDelete: 'cascade'
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        },
        onDelete: 'cascade'
      },

      url: {
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      shippingCosts: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        defaultValue: 10
      },
      averageServiceMinutes: {
        type: Sequelize.DOUBLE
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      heroImage: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM(['online', 'offline', 'closed', 'temporarily closed'])
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }

    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
