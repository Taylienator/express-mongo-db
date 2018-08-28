const express = require('express');
const router = express.Router();
const blogs = require('../models/Blog');
const User = require('../models/User');

router.get('/', (req, res) =>{
    blogs
    .find()
    .then(blogs =>{
        
        res.status(200).json(blogs);
    });

})

router.get("/featured", (req, res) =>{
    blogs
    .where("featured", true)
    .then(blogs =>{
        res.status(200).json(blogs);

    }).catch( err => res.status(404).send());
    
});

router.get("/:id", (req, res) =>{
    blogs
    .findById(req.params.id)
    .then(blog =>{
        if(!blog) res.status(404).send()
        res.status(200).json(blog);
    }).catch(err => res.status(404).send('findId=null'));
})

router.post('/', (req, res) => {
    let dbUser = null;
    console.log(req.body);
    User
        
        .findById(req.body.author)
        .then(user => {
            
            dbUser = user;
            const newBlog = new blogs(req.body);
            newBlog.author = user._id;
            return newBlog.save();
        })
        .then(blog => {
            dbUser.blogs.push(blog);
            dbUser.save().then(() => res.status(201).json(blog));
        }).catch(err=> console.log(err));

        
        

});



router.put('/:id', (req, res) =>{
    blogs
    .findByIdAndUpdate(req.params.id, req.body)
    .then(blog =>{
        if(!blog) res.status(404).send('error');
        res.status(204).json(blog);
    }).catch(err => res.status(404).send('SORRY::update request was not granted'));
})

router.delete('/:id', (req, res)=>{
    blogs
    .findByIdAndRemove(req.params.id)
    .then(blog =>{
        if(!blog) res.status(404).send('error');
        res.status(200).json(blog);
    }).catch(err => res.status(404).send('Hmmm, an item has not been deleted'));
})





module.exports = router;

