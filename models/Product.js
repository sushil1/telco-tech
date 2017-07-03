var mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
  name:{type:String, default:''},
  description:{type:String, default:''},
  price:{type:Number, default:0},
  image:{type:String, default:''},
  timestamp:{type:Date, default:Date.now}
})

ProductSchema.methods.summary = function(){
  var summary = {
    id: this._id.toString(),
    name: this.name,
    description: this.description,
    price: this.price,
    image:this.image,
    timestamp:this.timestamp
  }
  return summary
}


module.exports = mongoose.model('ProductSchema', ProductSchema)
