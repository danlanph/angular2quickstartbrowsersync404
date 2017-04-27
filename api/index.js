'use strict';

const express = require('express');

(function (api) {

    const testController = require('./testController');

    api.init = function () {

        const router = express.Router();

        router.use('/test', testController.init());

        return router;

    };

})(module.exports);