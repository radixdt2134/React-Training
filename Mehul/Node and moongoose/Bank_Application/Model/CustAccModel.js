var mongoose = require('mongoose');
const AccountSchema = new mongoose.Schema({
    AccountNumber: String,
    BranchName: String,
    AccountType :  String,
    BalanceAmount: Number,
    InsertedDatetime: { type: Date, default: Date.Now }
})

exports.AccountSchema = AccountSchema;