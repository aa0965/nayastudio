const express = require('express')
const Router = new express.Router()
const User = require('./User.js')


Router.post('/Users',async (req,res)=>{
  const user = new User(req.body.userObject)
 // console.log(req.body.userObject)
try{
  await user.save()
  res.status(200).send(user);
}catch(e){
  res.status(401).send(user)
}

})

module.exports = Router
