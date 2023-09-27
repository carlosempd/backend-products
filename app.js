const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const dbConfig = require('./config/connectDB')
const productRoutes = require('./routes/productRoutes')

app.use(bodyParser.urlencoded({
    extended: true
}))


// Routes
app.use('/products', productRoutes)

try {
    dbConfig(process.env.MONGO_URL, process.env.DB_NAME)
        .then(() => {
            console.log('DB connection established');
        }).catch(err => {
            throw err
        })
} catch (error) {
    throw new Error(`Database connection error: ${ error }`)
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
})