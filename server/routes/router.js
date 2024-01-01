const express = require("express");
const render = require("../services/render")
const controller = require("../controller/controller")

const route = express.Router()

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', render.homeRoutes)

/**
 * @description add user
 * @method GET /add-user
 */
route.get('/add-user', render.add_user)

/**
 * @description update user
 * @method /update-user
 */
route.get('/update-user', render.update_user)

// API
route.get('/api/user', controller.find);
route.post('/api/user', controller.create);
route.put('/api/user/:id', controller.update);
route.delete('/api/user/:id', controller.delete);

module.exports = route