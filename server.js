'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    api = require('./api');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/lib', express.static('node_modules'));
app.use(express.static('src'));
app.use('/api', api.init());

app.listen(PORT, () => {

    console.log(`Server listening on port: ${PORT}`);

});
