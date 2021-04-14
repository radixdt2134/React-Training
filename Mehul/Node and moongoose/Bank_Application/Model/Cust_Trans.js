var mongoose = require('mongoose');

const CustomerTraschema = new mongoose.Schema({
    Cust_TransId: Number,
    Cust_id : Number,
    Email: String,
    CustTransType: String,
    CustCreditAmt: Number,
    CustDebitAmt: Number,
    CustTranscationDate: { type: Date, default: Date.now },
    CustBalanceAmt: Number
});

mongoose.model('CustomerTranscation', CustomerTraschema);