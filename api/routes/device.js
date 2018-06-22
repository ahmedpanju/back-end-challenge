const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Devices = require('../models/device');

router.post('/', (req, res, next) => {
  const deviceInfo = new Devices({
    date: new Date(),
    deviceId: new mongoose.Types.ObjectId(),
    deviceName: req.body.deviceName,
    batteryStatus: req.body.batteryStatus,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  });
  deviceInfo
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Device Info Added'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.get('/:deviceId', (req, res, next) => {
  const id = req.params.deviceId;
  Devices.findById(id)
  .exec()
  .then(doc => {
    console.log(doc)
    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(404).json({message: 'No valid entry found for provided ID'});
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
});

module.exports = router;
