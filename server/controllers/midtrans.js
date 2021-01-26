const snap = require('../service/midtrans')
const TransactionModel = require('../models/Transaction')

exports.checkout = async (req, res) => {
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
        return res.status(200).send({
            token: transactionToken,
            clientKey: snap.apiConfig.clientKey
        })
    } catch (err) {
        res.send(err.status_message)
    }
}

exports.status = async (req, res) => {
    try {
        const transactionId = req.params.id
        const transactionStatus = await snap.transaction.status(transactionId)
        return res.send(transactionStatus.ApiResponse)
    } catch (err) {
        return res.send(err.ApiResponse)
    }
}

// masih kurang epic gans
exports.notification = async (req, res) => {
    const parameter = {
        'currency': 'IDR',
        'fraud_status': 'accept',
        'gross_amount': '24145.00',
        'order_id': 'test-transaction-321',
        'payment_type': 'bank_transfer',
        'status_code': '201',
        'status_message': 'Success, Bank Transfer transaction is created',
        'transaction_id': '6ee793df-9b1d-4343-8eda-cc9663b4222f',
        'transaction_status': 'pending',
        'transaction_time': '2018-10-24 15:34:33',
        'va_numbers': [{'bank': 'bca', 'va_number': '490526303019299'}]
    }

    const notif = await snap.transaction.notification(parameter)
    if (notif.transaction_status === 'capture') {
        if (notif.fraud_status === 'challenge') {
            // TO DO
        } else if (notif.fraud_status === 'accept') {
            // TO DO
        }
    } else if (notif.transaction_status === 'settlement') {
        // TO DO
    } else if (notif.transaction_status === 'deny') {
        // TO DO
    } else if (notif.transaction_status === 'cancel' || notif.transaction_status === 'expire') {
        // TO DO
    } else if (notif.transaction_status === 'pending') {
        // TO DO
    }
}

exports.test = async (req, res) => {
    return res.send('hai gaes')
}
