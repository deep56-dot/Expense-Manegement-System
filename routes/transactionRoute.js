const express = require("express");
const {edittransaction,addtransaction,getAlltransaction,deletetransaction} = require("../controllers/transactionController")


//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transaction",addtransaction );
//Edit transection POST MEthod
router.post("/edit-transaction",edittransaction);
//Delete transection POST MEthod
router.post("/delete-transaction", deletetransaction);

//get transections
router.post("/get-transaction", getAlltransaction);

module.exports = router;