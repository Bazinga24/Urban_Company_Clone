const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Provider = require('./models/Provider');
const Booking = require('./models/Booking');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes will be imported here
app.use('/api/providers', require('./routes/providers'));
app.use('/api/bookings', require('./routes/bookings'));

app.get('/', (req, res) => {
    res.send('Urban Company Clone API');
});

// Sync Database and Start Server
sequelize.sync().then(() => {
    console.log('Database connected and synced');

    // Seed initial data if providers are empty
    Provider.count().then(count => {
        if (count === 0) {
            console.log('Seeding initial data...');
            Provider.bulkCreate([
                { name: 'John Doe', category: 'Plumber', hourly_rate: 50, rating: 4.8, availability: 'Available' },
                { name: 'Jane Smith', category: 'Electrician', hourly_rate: 60, rating: 4.9, availability: 'Available' },
                { name: 'Mike Johnson', category: 'Plumber', hourly_rate: 45, rating: 4.5, availability: 'Busy' },
                { name: 'Sarah Williams', category: 'Cleaner', hourly_rate: 30, rating: 4.7, availability: 'Available' },
                { name: 'David Brown', category: 'Electrician', hourly_rate: 55, rating: 4.6, availability: 'Available' }
            ]).then(() => console.log('Data seeded'));
        }
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
