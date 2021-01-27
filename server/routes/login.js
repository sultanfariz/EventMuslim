const express = require("express");
const router = express.Router();
const User = require("../models/Organizer.js");
const bcrypt = require("bcryptjs");
const session = require("express-session");

router.use(express.urlencoded({extended:true}));

router.route("/").get((req,res)=>{
    let sess = req.session;
    console.log('This session has an id of ', sess.id);
    res.send({userId: sess.id})
});

router.route("/login")
    //get user's login status
    .get(async (req,res)=>{
        if(req.session.userId){
            res.send({loggedIn:true, userId: req.session.userId})
        }else{
            res.send({loggedIn:false})
        }
    })
    //user login
    .post( async (req,res)=>{
        try {
            const {email, password} = req.body;

            if(email && password){
                const getUser = await User.findOne({
                    where: {email:email}
                });
                if(!getUser){
                    return res.status(401).json({message:"Email tidak terdaftar"});
                }
                bcrypt.compare(req.body.password, getUser.password).then(result=>{
                    if(result){
                        req.session.userId = getUser.id;
                        // console.log("berhasil login");
                        return res.status(200).json({message: "Selamat anda berhasil login", email: email});
                    }else{
                        // console.log("gagal login");
                        return res.status(401).json({message: "Password salah !"});
                    }
                });
            }
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({message:"server error"});
        }
})

router.post("/logout", async (req,res)=>{
    req.session.destroy((err)=>{
            // if(err){}
            res.clearCookie(req.session);
        })
})

module.exports = router;