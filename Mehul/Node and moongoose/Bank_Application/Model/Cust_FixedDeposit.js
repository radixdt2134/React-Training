var mongoose = require('mongoose');
const FixedDepositSchema = new mongoose.Schema({
    FDAmount: Number,
    FDMonth: Number,
    FDPercenatge: Number,
    FDMaturityAmt: Number,
    FDMaturityDate: { type: Date, default: Date.now }
})

// FDMaturityAmt =  FDAmount
exports.FixedDepositSchema = FixedDepositSchema;