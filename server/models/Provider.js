const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Provider = sequelize.define('Provider', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hourly_rate: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0
    },
    rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0
    },
    availability: {
        type: DataTypes.STRING,
        defaultValue: 'Available' // 'Available' or 'Busy'
    }
});

module.exports = Provider;
