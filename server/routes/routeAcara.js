const express = require("express");
const router = express.Router();
const Acara = require("../models/Acara");
const Organizer = require("../models/Organizer.js");
const { Op } = require("sequelize");
const upload = require("./photosMiddleware");

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
    .post(upload.single('foto_cover'), async (req,res)=>{
        try {
            const {fk_id_organizer, nama_acara, lokasi, harga, tanggal, tag_acara, deskripsi, no_rek_organizer, bank_rek_organizer} = req.body;

            const foto_cover = req.file.path;

            //validate form
            if(fk_id_organizer && nama_acara && lokasi && harga && tanggal && tag_acara && deskripsi && foto_cover && no_rek_organizer && bank_rek_organizer){
                const newAcara =  await new Acara({
                    fk_id_organizer, nama_acara, lokasi, harga, tanggal, tag_acara, deskripsi, foto_cover, no_rek_organizer, bank_rek_organizer
                })
                await newAcara.save();
                const message = "User successfully inserted!";
                res.json({newAcara, message:message});
            }else{throw({message: "please fill the form correctly!"})}
        } catch (err) {
            console.error(err.message);
            res.status(500).json(err);
        }
    });

module.exports = router;