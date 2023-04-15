const { Cars } = require("../models")

const renderHome = async (req, res) => {
    const cars = await Cars.findAll();
    res.render("index", { cars })
}

const renderCreate = (req, res) => {
    res.render("pages/create")
}

const renderEdit = async (req, res) => {
    const car = await Cars.findOne({ where: { id: req.params.id } });

    res.render("pages/edit", { car })
}

async function CreateCar(req, res) {
    try {
        const imageUrl = req.imgUrl
        const car = req.body;
        const uploadData = {
            name: car.name,
            type: car.type,
            rentPrice: car.rentPrice,
            image: imageUrl
        }
        await Cars.create({
            ...uploadData
        })
        // await Cars.findAll();
        req.flash("create", "Data Berhasil Dibuat")
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }

}

async function ListCars(req, res) {
    try {
        const cars = await Cars.findAll();

        res.render("index", { cars })
    } catch (error) {
        console.log(error)
    }
}

function GetCarById(req, res) {
    const car = req.car;

    res.status(200).json(car);
}

async function UpdateCar(req, res) {
    try {
        const imageUrl = req.imgUrl
        const car = req.body;
        const uploadData = {
            name: car.name,
            type: car.type,
            rentPrice: car.rentPrice,
            image: imageUrl
        }
        await Cars.update({
            ...uploadData
        }, { where: { id: req.params.id } })
        req.flash("update", "Data Berhasil DiUpdate")
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}

async function DeleteCar(req, res) {
    try {
        await Cars.destroy({ where: { id: req.params.id } })
        req.flash("delete", "Data Berhasil didelete")
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    CreateCar,
    ListCars,
    GetCarById,
    UpdateCar,
    DeleteCar,
    renderHome,
    renderCreate,
    renderEdit
};
