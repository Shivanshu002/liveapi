require("dotenv").config();
const express = require('express');
const app = express();
const connect = require('./db/connect');


const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hi i am live")
});


// middle or test router
app.use("/api/products", products_routes);


const start = async () => {
    try {
        await connect(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes i am connected`)
        })
    } catch (error) {
        console.log(error)

    }
}

start();