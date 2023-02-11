const { DataTypes } = require('sequelize');

module.exports = (db) => {
    db.define('temperament', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {timestamps: false})
}