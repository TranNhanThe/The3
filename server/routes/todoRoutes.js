const express = require('express');
const router = express.Router();
const List = require('../models/List');

router.get('/', async (req, res) => {
    try {
        const lists = await List.find({}, '_id todo_name status');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.json(lists);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { todo_name, status } = req.body;

        const newList = new List({
            todo_name,
            status
        });

        const savedList = await newList.save();
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(201).json(savedList);
    } catch (error) {
        console.error('Error adding todo:', error);
        res.status(500).json({ message: 'Failed to add todo' });
    }
});

router.delete('/delete', async (req, res) => {
    try {
        const todoIds = req.body.ids;

        const todos = await List.find({ _id: { $in: todoIds } });
        if (todos.length !== todoIds.length) {
            return res.status(404).json({ message: 'Some todos not found' });
        }

        await List.deleteMany({ _id: { $in: todoIds } });

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json({ message: 'Todos deleted successfully' });
    } catch (error) {
        console.error('Error deleting todos:', error);
        res.status(500).json({ message: 'Failed to delete todos' });
    }
});

module.exports = router;