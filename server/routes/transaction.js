const {Router} = require('express');
const router = Router();
const snap = require('../controllers/transaction');
const Transaksi = require('../models/Transaksi');

router.get('/checkout', snap.transaction);
router.get('/ping', snap.test);


//checkout
router.route("/events/insert")
    //insert new event
    .post(async (req,res)=>{
        try {
            const {fk_id_organizer, nama_acara, lokasi, harga, tanggal, tag_acara, deskripsi, foto_cover, no_rek_organizer, bank_rek_organizer} = req.body;

            //validate form
            if(fk_id_organizer && nama_acara && lokasi && harga && tanggal && tag_acara && deskripsi && foto_cover && no_rek_organizer && bank_rek_organizer){
                const newTransaksi =  await new Transaksi({
                    fk_id_organizer, nama_acara, lokasi, harga, tanggal, tag_acara, deskripsi, foto_cover, no_rek_organizer, bank_rek_organizer
                })
                await newTransaksi.save();
                const message = "Transaction successfully inserted!";
                res.json({newTransaksi, message:message});
            }else{throw({message: "please fill the form correctly!"})}
        } catch (err) {
            console.error(err.message);
            res.status(500).json(err);
        }
    });

module.exports = router;
