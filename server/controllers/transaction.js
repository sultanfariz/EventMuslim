const snap = require('../service/midtrans')

exports.transaction = async (req, res) => {
    const parameter = {
        'transaction_details': {
            'order_id': "order-id-node-"+Math.round((new Date()).getTime() / 1000),// req.body.order_id,
            'gross_amount': 200000,// req.body.gross_amount
        }, 'credit-card': {
            'secure': true
        }
    }

    const transactionToken = await snap.createTransactionToken(parameter)
    res.status(200).send({
        token: transactionToken,
        clientKey: snap.apiConfig.clientKey
    })
}

exports.test = async (req, res) => {
    return res.send('hai gaes')
}
