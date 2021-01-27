const {Router} = require('express');
const router = Router();
const snap = require('../controllers/transaction');
const Transaksi = require('../models/Transaksi');

router.get('/checkout', snap.transaction);
router.get('/ping', snap.test);

//checkout
// router.route("/transaction/:id")
//     //create new transaction
//     .post(async (req,res)=>{
//         try {
//             const {nama_pembeli, email_pembeli, nomor_hp_pembeli, tanggal_pembelian, total_pembelian, infaq, fee} = req.body;

//             const id_acara = req.params.id;

//             //validate form
//             if(id_acara && nama_pembeli && email_pembeli && nomor_hp_pembeli && tanggal_pembelian && total_pembelian && infaq && fee){
//                 const newTransaksi =  await new Transaksi({
//                     fk_id_acara: id_acara, nama_pembeli, email_pembeli, nomor_hp_pembeli, tanggal_pembelian, total_pembelian, infaq, fee
//                 })
//                 await newTransaksi.save();
//                 const message = "Transaction successfully inserted!";
//                 res.json({newTransaksi, message:message});
//             }else{throw({message: "please fill the form correctly!"})}
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).json(err);
//         }
//     });

module.exports = router;
