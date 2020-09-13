const router = require('express').Router();
const {
    getProducts,
    getProjections
} = require('../controllers')

router.get('/', getProducts);
router.get('/projections', getProjections);

module.exports = router;