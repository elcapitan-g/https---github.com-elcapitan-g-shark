const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// Get all sharks
const getAll = async (req, res) => {
    //#swagger.tags=['Sharks']
    const result = await mongodb.getDatabase().db().collection('sharks').find();
    result.toArray().then((sharks) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(sharks);
    });
};

// Get one shark by ID
const getSingle = async (req, res) => {
    //#swagger.tags=['Sharks']
    const sharkId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('sharks').find({ _id: sharkId });
    result.toArray().then((sharks) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(sharks[0]);
    });
};

// Create a new shark entry
const createShark = async (req, res) => {
    //#swagger.tags=['Sharks']
    const shark = {
        name: req.body.name,
        scientific_name: req.body.scientific_name,
        size_meters: req.body.size_meters,
        num_human_kills: req.body.num_human_kills,
        habitat: req.body.habitat,
        aggressiveness: req.body.aggressiveness,
        order: req.body.order
    };
    const response = await mongodb.getDatabase().db().collection('sharks').insertOne(shark);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'An error occurred while creating the shark.');
    }
};

// Update a shark
const updateShark = async (req, res) => {
    //#swagger.tags=['Sharks']
    const sharkId = new ObjectId(req.params.id);
    const shark = {
        name: req.body.name,
        scientific_name: req.body.scientific_name,
        size_meters: req.body.size_meters,
        num_human_kills: req.body.num_human_kills,
        habitat: req.body.habitat,
        aggressiveness: req.body.aggressiveness,
        order: req.body.order
    };
    const response = await mongodb.getDatabase().db().collection('sharks').replaceOne({ _id: sharkId }, shark);
    if (response.modifiedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while updating the shark.');
    }
};

// Delete a shark
const deleteShark = async (req, res) => {
    //#swagger.tags=['Sharks']
    const sharkId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('sharks').deleteOne({ _id: sharkId });
    if (response.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while deleting the shark.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createShark,
    updateShark,
    deleteShark
};
