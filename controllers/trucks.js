const Truck = require('../models/trucks.js');
const express = require('express');
const router = express.Router();



router.post('/', async (req, res) => {
    try {
      const createdTruck = await Truck.create(req.body);
      res.status(201).json(createdTruck);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const foundTrucks = await Truck.find();
      res.status(200).json(foundTrucks);
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  });


router.delete('/:truckId', async (req, res) => {
    try {

      const deletedTruck = await Truck.findByIdAndDelete(req.params.truckId); 
      res.status(200).json(deletedTruck);
    
    } catch (error) {

    res.status(500).json({ error: error.message });

    }
  });

  



router.put('/truckId', async (req, res) => {
    try {
      const updatedTruck = await Pet.findByIdAndUpdate(req.params.truckId, req.body, {
        new: true,
      });
      if (!updatedTruck) {
        res.status(404);
        throw new Error('Truck not found.');
      }
      res.status(200).json(updatedTruck);
    } catch (error) {
      // Add code for errors
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });



module.exports = router;

