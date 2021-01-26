const midtransClient = require('midtrans-client')

const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: 'SB-Mid-server-lwqCNHkKKxNz8ouXMwB9XvNK',
    clientKey: 'SB-Mid-client-cO0ZhEBAzVdgdaI1'
})

module.exports = snap
