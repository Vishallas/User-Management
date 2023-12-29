const express = require("express");
const {model} = require("mongoose");
const render = require("../services/render")

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
route.get('/update-user',render.update_user)

module.exports = route