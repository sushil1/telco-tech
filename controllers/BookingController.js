var Booking = require('../models/Booking')
var Promise = require('bluebird')

module.exports = {

  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Booking.find(params, function(err, bookings){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(bookings)
        }
        var list = []
        bookings.forEach(function(booking){
          list.push(booking.summary())
        })
        resolve(list)
      })
    })
  },

  getById: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Booking.findById(params, function(err, booking){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(booking)
        }
        resolve(booking.summary())
      })
    })
  },

  post: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Booking.create(params, function(err, booking){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(booking)
        }
        resolve(booking.summary())
      })
    })
  }



}
