var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var jwt = require('jsonwebtoken')

router.get('/login', function(req, res, next){

if(req.session == null || req.session.token == null){
  console.log('please login')
  res.render('index')
  return
}

jwt.verify(req.session.token, process.env.JWT_TOKEN_SECRET, function(err, decode){
  if(err){
    console.log(err)
    return
  }
  controllers.profile.getById(decode.id, false)
    .then(function(profile){
      if(profile.roles.length == 0){
        res.json({
          confirmation:'failed',
          result: 'unauthorised access'
        })
        return
      }
      var admin = profile.roles.indexOf('admin')
      if(admin == -1){
        res.json({
          confirmation:'failed',
          result: 'unauthorised access'
        })
        return
      }
      res.json({
        confirmation:'success',
        admin: profile
      })

    })
    .catch(function(err){
      res.json({
        confirmation:'fail',
        message:err+''
      })
    })
})
})

router.get('/flash', function(req, res, next){
  req.flash('hello', 'mate welcome')
  res.redirect('/')
})
router.get('/add', function(req, res, next){
  req.flash('new', {type:'name', text:'sushil'})
  res.redirect('/')
})

router.get('/', function(req, res){
  res.json({messages: req.flash()})
})


module.exports = router
