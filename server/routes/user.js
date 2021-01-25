const {Router} = require('express')
const route = Router()
const User = require('../controllers/user')

const redirectLogin = (req,res,next)=>{
    if(!req.session.userId){
        res.redirect('/login');
    }else next();
}

// register route
route.get('/register', User.index)
route.get('/users:id', User.show)
route.post('/register', User.register)
route.put('/register/:id', User.edit)
route.delete('/register/:id', User.delete)

// login route
route.get('/login', User.auth)
route.post('/login', User.login)
route.post('/logout', User.logout)

module.exports = route
