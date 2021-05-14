module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'User',
        {
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    )
