const express = require('express');
const router = express.Router();
const Drone = require('./../models/Drone.model');
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(response => {
      console.log("hola", { response });
      res.render("./../views/drones/list.hbs", { response });
    })
    .catch(error => console.log(error));
});

router.get('/drones/create', (req, res, next) => res.render('drones/create-form.hbs'));


router.post('/drones/create', (req, res, next) => {
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    /*.then(droneFromDB => console.log(`New drone created: ${droneFromDB.name}.` */
    .then(() => res.redirect('/drones'))
    .catch(error => res.redirect('/drones/create'));
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  console.log(id)

  Drone.findById(id)
    .then(droneToEdit => {

      console.log("hola", droneToEdit);
      res.render('drones/update-form.hbs', droneToEdit);
    })
    .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  const { Id } = req.params;

  Drone.findByIdAndUpdate(Id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrones => res.redirect(`/drones/${updatedDrones.id}`))
    .catch(error => next(error));
});

// Model.findByIdAndUpdate(req.params.theId, req.body, { new: true })
// .then(res.redirect(`/drones/${updatedDrones.id}`))
// .catch(error => next(error));


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
