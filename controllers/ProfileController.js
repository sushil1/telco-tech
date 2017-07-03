var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')

module.exports = {

  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Profile.find(params, function(err, profiles){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(profiles)
        }
        var list = []
        profiles.forEach(function(profile){
          list.push(profile.summary())
        })
        resolve(list)
      })
    })
  },

  getById: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Profile.findById(params, function(err, profile){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(profile)
        }
        resolve(profile.summary())
      })
    })
  },

  post: function(params, isRaw){
    return new Promise(function(resolve, reject){

      Profile.find({email:params.email}, function(err, profiles){
        if(err){
          reject(err)
          return
        }
        if(profiles.length !== 0){
          console.log('email already registered')
          return
        }

        var hashed = bcrypt.hashSync(params.password, 10)
        params['password'] = hashed

        Profile.create(params, function(err, profile){
          if(err){
            reject(err)
            return
          }
          if(isRaw == true){
            resolve(profile)
          }
          resolve(profile.summary())
        })
      })
    })
  }

}
