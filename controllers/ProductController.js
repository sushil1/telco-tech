var Product = require('../models/Product')
var Promise = require('bluebird')

module.exports = {

  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Product.find(params, function(err, products){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(products)
        }
        var list = []
        products.forEach(function(product){
          list.push(product.summary())
        })
        resolve(list)
      })
    })
  },

  getById: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Product.findById(params, function(err, product){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(product)
        }
        resolve(product.summary())
      })
    })
  },

  post: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Product.create(params, function(err, product){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(product)
        }
        resolve(product.summary())
      })
    })
  }



}
