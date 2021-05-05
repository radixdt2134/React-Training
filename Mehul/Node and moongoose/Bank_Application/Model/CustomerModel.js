var mongoose = require('mongoose');
var { AccountSchema } = require('./CustAccModel');
var { FixedDepositSchema } = require('./Cust_FixedDeposit');

const Customerschema = new mongoose.Schema({    
    Cust_id: Number,
    FullName: String,
    DateOfBirth: Date,
    MobileNo: Number,
    Email: { type: String, unique: true,  index: true },
    Password: String,
    OTP: Number,
    Gender: String,
    Image: String,
    Age: Number,
    Account: [AccountSchema],
    FixDeposit: [FixedDepositSchema]
   // InsertedDateTime: { type: Date, default: Date.now }
}, { versionKey: false, timestamps: true })



mongoose.model('Customer', Customerschema);