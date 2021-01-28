const snap = require('../service/midtrans')
const TransactionModel = require('../models/Transaksi')

exports.checkout = async (req, res) => {
    const  {
        nama_pembeli,
        email_pembeli,
        nomor_hp_pembeli,
        fk_id_acara,
        organizer,
        jumlah,
        namaAcara,
        harga,
        fee,
        infaq,
        total_pembelian,
        state
    } = req.body
    
    const parameter = {
        'transaction_details': {
            'order_id': `${namaAcara}-no-`+Math.round((new Date()).getTime() / 1000),// req.body.order_id,
            'gross_amount': total_pembelian
        },
        'customer_details': {
            'first-name': nama_pembeli,
            'last-name': '',
            'email': email_pembeli,
            'phone': nomor_hp_pembeli
        },
        "enabled_payments": ["credit_card", "cimb_clicks",
                             "bca_klikbca", "bca_klikpay", "bri_epay", "echannel", "permata_va",
                             "bca_va", "bni_va", "bri_va", "other_va", "gopay", "indomaret",
                             "danamon_online", "akulaku", "shopeepay"],
        'credit-card': {
            'secure': true
        }
    }

    const transactionToken = await snap.createTransactionToken(parameter)
    const order_id = parameter.transaction_details.order_id
    const newTransaksi = await new TransactionModel({
        order_id, fk_id_acara, nama_pembeli, email_pembeli, nomor_hp_pembeli, infaq, total_pembelian, fee, state 
     })
     await newTransaksi.save()
    res.send({
        order_id: parameter.transaction_details.order_id,
        token: transactionToken,
        clientKey: snap.apiConfig.clientKey
    })
   /*
    try {
        const parameter = {
            'transaction_details': {
                'order_id': "order-id-node-"+Math.round((new Date()).getTime() / 1000),// req.body.order_id,
                'gross_amount': 200000,// req.body.gross_amount
            }, 'credit-card': {
                'secure': true
            }
        }
    
        const transactionToken = await snap.createTransactionToken(parameter)
        console.log('hai dunia')
        res.send({
            token: transactionToken,
            clientKey: snap.apiConfig.clientKey
        })
    } catch (err) {
        res.send(err.status_message)
    }
    */
}

exports.index = async (req, res) => {
    const getAllTransaksi = res.json(
        await TransactionModel.findAll({})
    )
}

exports.status = async (req, res) => {
    try {
        const transactionId = req.params.id
        const transactionStatus = await snap.transaction.status(transactionId)
        return res.send(transactionStatus)
    } catch (err) {
        return res.send(err.ApiResponse)
    }
}
