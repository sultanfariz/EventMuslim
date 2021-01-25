const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
const Acara = require("../models/Acara");
const Organizer = require("../models/Organizer.js");
const { Op } = require("sequelize");

router.use(express.urlencoded({extended:true}));

router.route("/events/:id")
    //search events by id
    .get(async (req,res)=>{
        try {
            const id = req.params.id;
            const getAcara = res.json(await Acara.findOne({
                where: {id:id}
            }));

        } catch (err) {
            console.error(err.message);
            res.status(500).json(err);
        }
    })

    //insert event belum diedit
router.route("/events/insert")
    //insert new event
    .post(async (req,res)=>{
        try {
            const {fk_id_organizer, nama_acara, lokasi, 
                harga, tanggal, tag_acara, deskripsi, foto_cover, no_rek_organizer, bank_rek_organizer} = req.body;

            //validate form
            if(username && email && namalengkap && password){
                //validate existed user
                const getUser = await User.findOne({
                    where: {
                        [Op.or]: [{username: username},{email:email}]
                    }
                });
                if(!getUser){
                    await bcrypt.hash(req.body.password, 10).then(async (hash)=>{
                        const newUser =  await new User({
                            username, email, namalengkap, password: hash
                        })
                        await newUser.save();
                        const message = "User successfully inserted!";
                        res.json({newUser, message:message});
                    })
                }else{throw({message: "username or email existed!"})}
            }else{throw({message: "please fill the form correctly!"})}
        } catch (err) {
            console.error(err.message);
            res.status(500).json(err);
        }
    });

module.exports = router;