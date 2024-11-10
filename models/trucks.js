const mongoose = require('mongoose');


const truckSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    artist: {
    type: String,
    required: true,
    },
  });


const Truck = mongoose.model('Truck', truckSchema);


module.exports = Truck;

