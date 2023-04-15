const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")
const cookie = require("cookie-parser")
const flash = require("express-flash")
const session = require("express-session")

const port = process.env.PORT || 8081;
const app = express();

const carRoutes = require("./routes/cars");
const cookieParser = require("cookie-parser");

app.use(express.static(path.join(__dirname, "public")))

// Pasang JSON Parser middleware
app.use(express.json());
app.use(cookieParser("keyboard cat"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash())

// app.use(flash())
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));

app.use(carRoutes)

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
