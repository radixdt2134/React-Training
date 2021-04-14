var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var customer = mongoose.model('Customer');
var emailsent = require('./../../Domain/EmailSent')
var jwt = require('jsonwebtoken');
var emailmessage = require('../../public/emailmessage');

var TokenVerify = require('../../public/TokenAlgo/tokenverify');

// var AccountSchema = require('../../Model/CustAccModel')
const { RESIZE_BEZIER } = require('jimp');
const { read } = require('jimp');

class CustomerController {

    static async GetCustomer(req, res) {
        const Custdetails = await customer.find();
        if (Custdetails) {
            res.send(Custdetails);
        }
        else {
            res.status(500).send("Internal Server Error");
        }
    }

    // Cutomer Login process
    static async GetLogin(req, res) {
        var username = req.body.email;
        var Password = req.body.password;
        await customer.findOne({ "Email": username, "Password": Password }).then(
            (valid) => {
                if (!valid) {
                    res.status(500).send("username and password incorrect");
                }
                let token = jwt.sign(req.body, global.config.secretKey, {
                    algorithm: global.config.algorithm,
                    expiresIn: '20m'
                });
                res.status(200).json({ valid, token: token });
            }
        );
    }
    // Customer Change pass
    static async GetChangePwd(req, res) {
        var email = req.body.email;
        var Password = req.body.oldpassword;
        var newpassword = req.body.newpassword;

        await customer.findOneAndUpdate({ "Email": email, "Password": Password }, {
            $set: {
                Password: newpassword
            }
        }, { new: true })
            .then(
                (customer) => {
                    emailsent(email, "Customer-ChangePassword", "Hello Customer, <br/><br/> <br/>  Password changed Succesfully. <br/> <br/> <br/> Thanks & Regards,<br/> One bank ");
                    res.send(customer);
                }
            )
            .catch(
                (error) => {
                    res.status(500).send("email and password not valid");
                }
            )
    }

    // Customer Forget pass
    static async GetForgetPwd(req, res) {
        var email = req.body.email;

        await customer.findOne({ "Email": email }).then(
            (customer) => {
                emailsent(email, "Customer-ForgetPassword", "Hello Customer, <br/><br/> <br/> Your Password is : " + customer.Password + ". <br/> <br/> <br/> Thanks & Regards,<br/> One bank ");
                res.send(customer);
            }
        )
            .catch(
                (error) => {
                    res.status(500).send(error);
                }
            )
    }

    static async PostCustomer(req, res) {
        var Customerdtl = req.body;
        if (Customerdtl) {
            // Create Cust_ID
            const custid = await customer.find().sort("-Cust_id").select("Cust_id").count();
            //OTP generate        
            var OTPNo = Math.floor(1000 + Math.random() * 9000);
            //Post Image
            const uploadedFile = req.files.file;
            let baseurl = 'public/';
            let uploadpath = baseurl + '/Cust_upload/' + req.files.file.name;
            uploadedFile.mv(uploadpath, function (err) {
                if (err) {
                    console.log(err)
                    return;
                }
            });
            //Age
            var dob = new Date(Customerdtl.DateOfBirth);
            var month_diff = Date.now() - dob.getTime();
            var age_dt = new Date(month_diff);
            var age = Math.abs(age_dt.getUTCFullYear() - 1970);

            const postcustomer = new customer({
                Cust_id: custid + 1,
                Fullname: Customerdtl.Fullname,
                DateOfBirth: Customerdtl.DateOfBirth,
                MobileNo: Customerdtl.MobileNo,
                Email: Customerdtl.Email,
                Password: Customerdtl.Password,
                OTP: OTPNo,
                Gender: Customerdtl.gender,
                Image: req.files.file.name,
                Age: age,
                Acoount: Customerdtl.Account,
                FixDeposit: Customerdtl.FixDeposit
            })

            // send Email Process                       
            await postcustomer.save().then((postcustomer) => {
                res.send(postcustomer);
                emailsent(Customerdtl.Email, "Customer-register", "Customer successful Registered in Obank.");
            }).catch((error) => {
                console.log(res.keyValue);
                res.send(error);
            });


        }
    }

    // update Account details
    static async PostAccdetails(req, res) {
        var email = req.body.email;
        var Accountdtl = req.body.Account;

        console.log(Accountdtl);
        await customer.findOneAndUpdate({ "Email": email }, {
            $set: {
                Account: Accountdtl
            }
        }, { new: true })
            .then(
                (customer) => {
                    res.send(customer);
                    //console.log(customer.Account[0].AccountNumber);
                    var msg = emailmessage.firstpart + "Your Account Succesfully Registered in OBank. <br/><br/>1.Your Account Number is : " + customer.Account[0].AccountNumber + "<br/> 2.Account Type : " + customer.Account[0].AccountType + "<br/> 3.Branch name : " + customer.Account[0].BranchName + " <br/> 4.Balance is : " + customer.Account[0].BalanceAmount + emailmessage.lastpart;
                    emailsent(email, "Account details", msg)
                }
            )
            .catch(
                (error) => {
                    res.status(500).send(error);
                })
    }

    static async PostFixedDeposit(req, res) {
        var email = req.body.email;
        var FixDepositdtl = req.body.FixDeposit;
        if (FixDepositdtl[0].FDMonth) {
            var FDMaturityAmt = Math.round(FixDepositdtl[0].FDAmount * (1 + (FixDepositdtl[0].FDPercenatge * 0.01) * (FixDepositdtl[0].FDMonth / 12)));
        }
        FixDepositdtl[0].FDMaturityAmt = FDMaturityAmt;

        await customer.findOneAndUpdate({ "Email": email }, {
            $set: {
                FixDeposit: FixDepositdtl
            }
        }, { new: true })
            .then(
                (customer) => {
                    res.send(customer);
                    var msg = emailmessage.firstpart + "You have deposited " + customer.FixDeposit[0].FDAmount + "  for " + customer.FixDeposit[0].FDMonth + " months and at time rate of insterest " + customer.FixDeposit[0].FDPercenatge + " <br/><br/><br/> You Maturity Amount is : <b>" + customer.FixDeposit[0].FDMaturityAmt + " </b> " + emailmessage.lastpart;
                    emailsent(email, "Obank- FixedDeposit", msg)

                }
            )
            .catch(
                (error) => {
                    res.status(500).send(error);
                }
            )

    }

    static async deletecustomer(req, res) {
        const delecust = await customer.findOneAndDelete({ "Email": req.body.email })
        if (delecust) {
            const data = await customer.find();
            res.send(data);
        }

    }

    static async updateCustomer(req, res) {
        var updateCustinfo = req.body

        var dob = new Date(updateCustinfo.DateOfBirth);
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var age = Math.abs(age_dt.getUTCFullYear() - 1970);

        await customer.findOneAndUpdate({ "Email": req.body.email },
            {
                $set: {
                    FullName: updateCustinfo.Fullname,
                    DateOfBirth: updateCustinfo.DateOfBirth,
                    MobileNo: updateCustinfo.MobileNo,
                    Gender: updateCustinfo.Gender,
                    Age: age
                }
            }, { new: true }).then(
                (customer) => {
                    res.send(customer);
                }
            )
            .catch(
                (error) => {
                    res.status(500).send(error);
                }
            )
    }
}


router.get('/login', CustomerController.GetLogin);
router.get('/changepwd', CustomerController.GetChangePwd);
router.get('/forgetpwd', CustomerController.GetForgetPwd);
router.post('/', CustomerController.PostCustomer);

//router.get('/', TokenVerify, CustomerController.GetCustomer);

router.get('/',TokenVerify, CustomerController.GetCustomer);
router.put('/account', CustomerController.PostAccdetails);
router.put('/fixed', TokenVerify,CustomerController.PostFixedDeposit);
router.put('/',TokenVerify, CustomerController.updateCustomer);
router.delete('/',TokenVerify, CustomerController.deletecustomer);


//pending 
//1. customer  update
//2. customer delete


module.exports = router;
