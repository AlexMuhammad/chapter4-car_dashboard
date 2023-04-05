const express = require("express");
const handler = require("./handler");
const middleware = require("./middleware");

const port = process.env.PORT || 8081;
const app = express();

// Pasang JSON Parser middleware
app.use(express.json());

// Router
app.post("/cars", handler.CreateCar);
app.get("/cars", handler.ListCars);
app.get("/cars/:id", middleware.setCar, handler.GetCarById);
app.put("/cars/:id", middleware.setCar, handler.UpdateCar);
app.delete("/cars/:id", middleware.setCar, handler.DeleteCar);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
