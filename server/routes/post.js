const express = require('express'); 
const router = express.Router();
const Post = require('../models/Post'); 


router.get('/', async (req,res)=>{
    let post = await Post.find();
    res.send(post);   
}); 


router.post('/', async (req,res)=>{
    let post = new Post({
        title: req.body.title
    })
    await post.save(); 
    res.send(post); 
})



module.exports = router; 