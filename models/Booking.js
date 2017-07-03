var mongoose = require('mongoose')

var BookingSchema = new mongoose.Schema({
  profile:{type:mongoose.Schema.Types.Mixed, default:{}},
  address:{type:String, default:''},
  city:{type:String, default:''},
  postcode:{type:String, default:''},
  serviceDate:{type:String, default:''},
  serviceTime:{type:String, default:''},
  description:{type:String, default:''},
  timestamp:{type:Date, default:Date.now}
})


BookingSchema.methods.summary = function(){
  var summary = {
    id: this._id.toString(),
    profile: this.profile,
    address: this.address,
    city:this.city,
    postcode:this.postcode,
    serviceDate:this.serviceDate,
    serviceTime:this.serviceTime,
    description:this.description,
    timestamp:this.timestamp
  }
  return summary
}


module.exports = mongoose.model('BookingSchema', BookingSchema)
