const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Provider = require('../models/Provider');

// POST /api/bookings - Create a new booking
router.post('/', async (req, res) => {
    try {
        const { customer_name, customer_email, date, time, description, providerId } = req.body;

        // Validate provider existence
        const provider = await Provider.findByPk(providerId);
        if (!provider) {
            return res.status(404).json({ message: 'Provider not found' });
        }

        if (provider.availability === 'Busy') {
            return res.status(400).json({ message: 'Provider is not available' });
        }

        const booking = await Booking.create({
            customer_name,
            customer_email,
            date,
            time,
            description,
            ProviderId: providerId,
            status: 'Confirmed'
        });

        // Update provider availability to Busy
        provider.availability = 'Busy';
        await provider.save();

        res.status(201).json(booking);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET /api/bookings - List all bookings (Admin view)
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [{ model: Provider, attributes: ['name', 'category'] }],
            order: [['createdAt', 'DESC']]
        });
        res.json(bookings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// PATCH /api/bookings/:id/status - Update booking status
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body; // 'Completed' or 'Cancelled'
        const booking = await Booking.findByPk(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        booking.status = status;
        await booking.save();

        // If booking is completed or cancelled, make provider available again
        if (status === 'Completed' || status === 'Cancelled') {
            const provider = await Provider.findByPk(booking.ProviderId);
            if (provider) {
                provider.availability = 'Available';
                await provider.save();
            }
        }

        res.json(booking);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
