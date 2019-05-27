const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const Models = require('../models/data');

// this is our get method
// this method fetches all available data in our database
// router.get('/rooms', (req, res) => {
//     Models.Stays.find({}, (err, stays) =>{
//         return res.json(stays);
//     });
// });

router.get('/rooms', (req, res) => {
    Models.Stays.find({}, (err, Stays) =>{
        return res.json(Stays);
    });
});


// this is our create methid
// this method adds new data in our database
router.post('/newInfo', (req, res) => {
    const inn = new Models.Inn();
    inn.name = req.body.name;
    inn.location = req.body.location;
    inn.type = req.body.type;
    inn.num = req.body.num;

    inn.save((err) => {
        if (err) return console.log(err);
    });
});

// this is our update method
// this method overwrites existing data in our database
// router.post('/updateData', (req, res) => {
//   const { id, update } = req.body;
//   Models.Inn.findByIdAndUpdate(id, update, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// this is our delete method
// this method removes existing data in our database
// router.delete('/deleteData', (req, res) => {
//   const { id } = req.body;
//   Models.Inn.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });





// const fin = new Models.HostInfo({name: "Fin", tier: 2});

// fin.save((err, Fin) => {
//   if(err) return console.log(err);
// });













module.exports = router;