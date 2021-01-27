const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/Organizer.js");
const { Op } = require("sequelize");

const docs = require('simple-rest-docs');

const options = {
  files: ['./register.js'], // glob pattern
  output: './README.md', //default './DOCUMENT.md'
  // parsers: []
}

docs(options);

router.use(express.urlencoded({extended:true}));

router.route("/register")
    //show all user
    .get(async (req,res)=>{
        try {
            const getAllUser = res.json(await User.findAll({}));

        } catch (err) {
            console.error(err.message);
            res.status(500).json(err);
        }
    })
    //insert new user
    .post(async (req,res)=>{
        try {
            const {email, password} = req.body;

            //validate form
            if(email && password){
                //validate existed user
                const getUser = await User.findOne({
                    where: {
                        // [Op.or]: [{username: username},{email:email}]
                        email:email
                    }
                });
                if(!getUser){
                    await bcrypt.hash(req.body.password, 10).then(async (hash)=>{
                        const newUser =  await new User({
                            email, password: hash
                        })
                        await newUser.save();
                        const message = "User successfully inserted!";
                        res.json({newUser, message:message});
                    })
                }else{throw({message: "email existed!"})}
            }else{throw({message: "please fill the form correctly!"})}
        } catch (err) {
            console.error(err.message);
            res.status(500).json(err);
        }
    });

router.route("/users/:id")
    //search user by id
    .get(async (req,res)=>{
        try {
            const id = req.params.id;
            const getUser = res.json(await User.findOne({
                where: {id:id}
            }));

        } catch (err) {
            console.error(err.message);
            res.status(500).json(err);
        }
    })

router.route("/register/:id")
    //edit user
    .put(async (req,res)=>{
        try {
            const {email, nama_organizer, nomor_hp, password, instagram, facebook, whatsapp} = req.body;
            const id = req.params.id;
            
            bcrypt.hash(req.body.password, 10).then(async (hash)=>{
                const editUser = await User.update({
                    email, nama_organizer, nomor_hp, password: hash, instagram, facebook, whatsapp
                },{where: {id:id}});
                await editUser; 
                return res.json({editUser:{id, email, nama_organizer, nomor_hp, password: hash, instagram, facebook, whatsapp}, message:'User successfully edited!'});
            })

        } catch (err) {
            console.error(err.message);
            return res.status(500).json({message:"server error"});
            }
    })
    //delete user
    .delete(async (req,res)=>{
        try {
            const id= req.params.id;
            const deleteUser = await User.destroy({
                where: {id:id}
            });
            await deleteUser; 
            res.json({message:"User successfully deleted!"})
        } catch (err) {
            console.error(err.message);
            res.status(500).send("server error");
        }
    });

module.exports = router;