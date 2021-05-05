var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CustTrans = mongoose.model('CustomerTranscation');
var customer = mongoose.model('Customer');
var emailsent = require('./../../Domain/EmailSent')
var TokenVerify = require('../../public/TokenAlgo/tokenverify');
const { intToRGBA } = require('jimp');


class Customer_Transcation {
    static async PostCustTranscation(req, res) {
        var ObjTrans = req.body.Trans;
        if (ObjTrans) {

            const balanceamt = await customer.findOne({ "Email": req.body.email }).select('Account Cust_id');
            var balance = balanceamt.Account[0].BalanceAmount;
            var diffbalance = 0;
            if (balance != 0) {
                console.log(balance);
                if (ObjTrans[0].CustTransType == "Credit") {
                    diffbalance = balance + ObjTrans[0].CustCreditAmt;
                }
                else if (ObjTrans[0].CustTransType == "Debit") {
                    diffbalance = balance - ObjTrans[0].CustDebitAmt;
                }
                balanceamt.Account[0].BalanceAmount = diffbalance;

                const CustTransid = await CustTrans.find().sort("-CustTrans_id").select("Cust_TransId").count();

                const postcustomertrans = new CustTrans({
                    Cust_TransId: CustTransid + 1,
                    Cust_Id: balanceamt.Cust_id,
                    Email: ObjTrans[0].Email,
                    CustTransType: ObjTrans[0].CustTransType,
                    CustCreditAmt: ObjTrans[0].CustCreditAmt,
                    CustDebitAmt: ObjTrans[0].CustDebitAmt,
                    CustBalanceAmt: diffbalance
                });
                await postcustomertrans.save().then(
                    (CustTrans) => {
                        customer.findOneAndUpdate({ "Email": req.body.email }, {
                            $set: {
                                Account: balanceamt.Account[0]
                            }
                        }, { new: true }).then(
                            (customer) => {
                                res.send(CustTrans);
                            }
                        )
                            .catch(
                                (error) => {
                                    res.status(500).send("No Match.")
                                }
                            )

                    }
                )
            }
            else {
                res.status(500).send("Customer Balance is 0")
            }
        }

    }

    static async GetCustomerTranscation(req, res) {
        var ObjGetTrans = req.body.Trans;
        
        console.log(ObjGetTrans[0].Cust_Id);

        if (ObjGetTrans[0].Cust_Id) {
            const Getdata = await CustTrans.find({ "Cust_id": ObjGetTrans[0].Cust_Id }).sort("-Cust_TransId")
                .select();
            if (Getdata) {
                res.json(Getdata);
            }
            else {
                res.status(500).send("Data failed.")
            }
        }
        else
        {
            res.send("ObjGetTrans is blank")
        }
    }

}

// Get details : fromdate and ToDate (status=> Monthly,weekly,yearly and custom date)
// CustomerName, AccountNumber,
// Post every transcation using email.
// 


router.post('/', Customer_Transcation.PostCustTranscation);
router.get ('/',Customer_Transcation.GetCustomerTranscation);

module.exports = router;