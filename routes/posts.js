const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get back all the posts
router.get('/', async(req, res) =>{
  try{
    const post = await Post.find();
    res.json(post);
  }catch(err){
    res.json({message: error})
  }
});


//submit the posts
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try{

  const savedPost = await post.save();
  res.json(savedPost);
}catch(err){
  res.json({message:error})
}

});


//Get a specific posts
router.get('/:postId', async(req,res) =>{
try{
  const post = await Post.findById(req.params.postId);
  res.json(post);
}catch(err){
  res.json({message:error});
}
});

//Delete a post

router.delete('/:postId', async(req,res) => {
  try{
    const removedPost = await Post.remove({_id: req.params.postId})
    res.json(removedPost)
  }catch(err){
    res.json({message:error});
  }

});

//update a posts

router.patch('/:postId', async (req, res) => {
  try{
  const updatedPost =  await Post.updateOne(
    {_id: req.params.postId},
    {$set: {title: req.body.title}
  });
  res.json(updatedPost);
}catch(err){
  res.json({message: error})
}
})




module.exports = router;
