const express = require('express');
const router = express.Router();


router.get('/users', (req, res) => {
    res.send('Get all users');
});

router.post('/users', (req, res) => {
    res.send('User created');
});

router.get('/users/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
});

router.put('/users/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
});

router.delete('/users/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
});

router.post('/auth/login', (req, res) => {
    res.send('User logged in');
});

router.post('/auth/register', (req, res) => {
    res.send('User registered');
});

module.exports = router;
