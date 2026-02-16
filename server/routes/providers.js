const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');

// GET /api/providers - List all providers (optional filter by category)
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const whereClause = category ? { category } : {};

        const providers = await Provider.findAll({ where: whereClause });
        res.json(providers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET /api/providers/:id - Get single provider details
router.get('/:id', async (req, res) => {
    try {
        const provider = await Provider.findByPk(req.params.id);
        if (!provider) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.json(provider);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
