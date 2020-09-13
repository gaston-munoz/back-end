const { products, projections }  = require('../index');

const getProducts = (req, res) => {
    res.send(products);
}

const getProjections = (req, res) => {
    res.send(projections);
}

module.exports = { 
    getProducts,
    getProjections
}