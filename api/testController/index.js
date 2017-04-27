'use strict';

const express = require('express');

(function (api) {

    api.init = function () {

        const router = express.Router();

        router.get('/', function (req, res) {

            res.json({ hello: "world" });

        });

        return router;

    };

})(module.exports);