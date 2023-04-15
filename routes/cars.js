const express = require("express");
const router = express.Router()
const multer = require("multer")
const cloudinaryUpload = require("../middleware/cloudinaryUpload.js")
const imageUploader = require("../middleware/imageUploader")
const carsControllers = require("../controllers/cars")
// const checkCar = require("../middleware/checkCar.js")

router.get("/", carsControllers.renderHome);
router.get("/create", carsControllers.renderCreate);
router.get("/edit/:id", carsControllers.renderEdit);
router.post("/create", imageUploader, cloudinaryUpload, carsControllers.CreateCar);
router.post("/edit/:id", imageUploader, cloudinaryUpload, carsControllers.UpdateCar);
router.get("/delete/:id", carsControllers.DeleteCar);

module.exports = router