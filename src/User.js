
const validator = require('validator')
const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    trim:true,
    lowecase:true,

  },
  password:{
    type:String,
    required:true,
    trim:true,
    minlength:3,
    // validate(value){
    //   if(value.toLowerCase().includes('password')){
    //     throw new Error('password cannot contain "password"')
    //   }
    // }
  },

  makerCapacity:{
    type:String,
  },
  material:{
    type:String
  },
  location:{
    typr:String
  },
  designCapacity:{
    type:String
  },
  designerType:{
    type:String
  },
  training:{
    type:String
  }

})



// userSchema.pre('save',async function(next){
//   const user = this
//
//   if(user.isModified('password')){
//     user.password = await bcrypt.hash(user.password,8)
//   }
//
//   next()
// })

const user = mongoose.model('User',userSchema)



module.exports = user;
