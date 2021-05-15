const TABLE_NAME = 'users';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(TABLE_NAME, {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: Sequelize.INTEGER,
			},
			firstname: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			lastname: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			username: {
				allowNull: false,
				type: Sequelize.STRING(50),
				unique: true,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING(40),
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface) => queryInterface.dropTable(TABLE_NAME),
};
