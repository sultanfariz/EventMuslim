const EventModel = require('../models/Acara')
const { Op } = require('sequelize')
const upload = require('../routes/photosMiddleware');

exports.index = async (req, res) => {
    try {
        const events = res.json(await EventModel.findAll({}));

    } catch (err) {
        console.error(err.message);
        res.status(500).json(err);
    }
}

exports.show = async (req, res) => {
    try {
        const id = req.params.id;
        const event = res.json(await EventModel.findOne({
            where: {id:id}
        }));

    } catch (err) {
        console.error(err.message);
        res.status(500).json(err);
    }
}

exports.search = async (req, res) => {
    try {
        const judul = req.body.judul;
        const events = res.json(await EventModel.findAll({
            where:{
                [Op.iLike]: '%'+judul+'%'
            }
        }));

    } catch (err) {
        console.error(err.message);
        res.status(500).json(err);
    }
}

exports.create = async (req, res) => {
    try {
        const {fk_id_organizer, nama_acara, lokasi, harga, tanggal, tag_acara, deskripsi, no_rek_organizer, bank_rek_organizer} = req.body;

        // const foto_cover = req.file.path;

        //validate form
        if(fk_id_organizer && nama_acara && lokasi && harga && tanggal && tag_acara && deskripsi && no_rek_organizer && bank_rek_organizer){
            const newEvent =  await new EventModel({
                fk_id_organizer, nama_acara, lokasi, harga, tanggal, tag_acara, deskripsi, no_rek_organizer, bank_rek_organizer
            })
            await newEvent.save();
            const message = "Event successfully created!";
            res.json({newEvent, message:message});
        }else{throw({message: "please fill the form correctly!"})}
    } catch (err) {
        console.error(err.message);
        res.status(500).json(err);
    }
}
