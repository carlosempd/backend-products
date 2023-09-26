const express = require('express')
const app = express()

const productRoutes = require('./routes/productRoutes')

app.use('/products', productRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
})