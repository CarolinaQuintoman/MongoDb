const express = require('express');
const adminSchema = require('../models/administrador');

const router = express.Router();

//create admin
router.post('/admin', (req, res) =>{
    const admin = adminSchema(req.body);
    admin.save()
    .then ((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router;