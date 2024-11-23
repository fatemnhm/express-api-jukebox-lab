const express = require('express');
const router = express.Router();
const Track = require('../models/tracks.js'); 

// CREATE - POST - /tracks
router.post('/', async (req, res) => {
    try {
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ ALL TRACKS - GET - /tracks
router.get('/', async (req, res) => {
    try {
        const foundTracks = await Track.find();
        res.status(200).json(foundTracks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ ONE TRACK - GET - /tracks/:trackId
router.get('/:trackId', async (req, res) => {
    try {
        const foundTrack = await Track.findById(req.params.trackId);
        if (!foundTrack) {
            res.status(404);
            throw new Error('Track not found.');
        }
        res.status(200).json(foundTrack);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});
// UPDATE - PUT - /tracks/:trackId

router.put('/:trackId', async (req, res) => {
    try {
      const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body, {
          new: true
      })
      if (!updatedTrack) {
          res.status(404)
          throw new Error('Track not found')
      }
      res.status(200).json(updatedTrack)
    } catch (error) {
      if (res.statusCode === 404) {
          res.json({ error: error.message })
      }
      res.status(500).json({ error: error.message })
    }
  })
  
// DELETE - DELETE - /tracks/:trackId
router.delete('/:trackId', async (req, res) => {
    try {
        const deletedTrack = await Track.findByIdAndDelete(req.params.trackId);
        res.status(200).json(deletedTrack);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
