const cloudinary = require("../config/cloudinary.js");

const cloudinaryUpload = async (req, res, next) => {
    try {
        const fileBase64 = req.file.buffer.toString("base64"); //convert buffer to base64
        const file = `data:${req.file.mimetype};base64,${fileBase64}`;
        const folderCloudinary = "car-dashboard"; //folder in cloudinary console

        const uploadImg = await cloudinary.uploader.upload(file, {
            folder: folderCloudinary,
        });

        req.imgUrl = uploadImg.secure_url; //generated url

        next();
    } catch (error) {
        res.status(400).json({
            message: "Gagal Upload file!",
            err_msg: error.message,
        });
    }
};

module.exports = cloudinaryUpload;