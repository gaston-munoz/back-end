const express = require('express');
const logger = require('signale');
const cors = require('cors');


const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

app.use('/products', require('./routes'));

app.listen(port, () => {
    logger.success(`Server listen on Port ${port}`);
});

