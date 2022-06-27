const express = require('express');
const router = express.Router();
const Drone = require('./../models/Drone.model');
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(response => {
      console.log("hola",response);
      res.render("./../views/drones/list.hbs", { response });
    })
    .catch(error => console.log(error));
});

router.get('/drones/create', (req, res, next) => {
  // .then((res) => {
  //   return Drone.create({
  //     name: 'Halcon Milenario',
  //     propellers: 111,
  //     maxSpeed:420,
  //   })
  // })
  // .catch((err) => console.log(err))
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
