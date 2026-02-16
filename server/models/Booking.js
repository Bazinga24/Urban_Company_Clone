const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Provider = require('./Provider');

const Booking = sequelize.define('Booking', {
    customer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Confirmed' // 'Confirmed', 'Completed', 'Cancelled'
    }
});

// Association
Booking.belongsTo(Provider);
Provider.hasMany(Booking);

module.exports = Booking;
