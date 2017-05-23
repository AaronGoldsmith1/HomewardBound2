const express = require('express');
const router = express.Router();
const usersRouter = express.Router();
const queriesRouter = express.Router();

const usersController = require('../controllers/users');
const queriesController = require('../controllers/queries');


queriesRouter.route('/:userId')
  .post(queriesController.createQuery)

//creates new user
usersRouter.route('/')
  .post(usersController.create)



// //shows queries of user
  // usersRouter.route('/:id')
  //   .get(sessionController.isLoggedIn, usersController.me)


module.exports = {
  users: usersRouter,
  queries: queriesRouter,

}