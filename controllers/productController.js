
const getAllProducts = ((req, res) => {
    res.json({
        message: 'List of products'
    })
})

module.exports = {
    getAllProducts
}