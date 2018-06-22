const mongoose = require('mongoose');

const deviceSchema = mongoose.Schema({
  date: {type: String, required: true},
  deviceId: mongoose.Schema.Types.ObjectId,
  deviceName: {type: String, required: true},
  batteryStatus: {type: String, required: true},
  longitude: {type: String, required: true},
  latitude: {type: String, required: true},
});

module.exports = mongoose.model('Devices', deviceSchema)
