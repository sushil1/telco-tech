var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
  firstName:{type:String, default:''},
  lastName:{type:String, default:''},
  mobile:{type:String, default:''},
  email:{type:String, default:''},
  roles: {type:Array, default:[]},
  password:{type:String, default:''},
  timestamp:{type:Date, default:Date.now}
})

ProfileSchema.methods.summary = function(){
  var summary = {
    id: this._id.toString(),
    firstName: this.firstName,
    lastName: this.lastName,
    mobile: this.mobile,
    email:this.email,
    roles: this.roles,
    timestamp:this.timestamp
  }
  return summary
}


module.exports = mongoose.model('ProfileSchema', ProfileSchema)
