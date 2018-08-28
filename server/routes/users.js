const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) =>{
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        })
});

router.get('/:id', (req, res) =>{
    User
        .findById(req.params.id)
        .then(users =>{
            if(!users) res.status(404).send();
            res.status(200).json(users);
            
        }).catch( err => res.status(404).send('error'));
});

router.post('/', (req, res) => {
    const user = new User(req.body)
    user
        .save()
        .then(user => {
            res.status(201).json(user);
        });
});
router.put('/:id', (req, res)=>{
    User 
    .findByIdAndUpdate(req.params.id)
    .then(users =>{
        if (!users) res.status(404).send();
        res.status(204).json(users);
    
    }).catch(err => res.status(404).send('Unable to handle request'));
})

router.delete('/:id', (req, res)=>{
    User
    .findByIdAndRemove(req.params.id)
    .then(users =>{
        if(!users) res.status(404).send();
        res.status(200).json(users);
    }).catch(err => res.status(404).send('Unable to handle delete request'));
})
module.exports = router;
































