'use strict';

const _ = require('lodash');

module.exports = function(server, routes) {

    _(routes)
        .map((route) => {
            route.method = route.method.toLowerCase();
            return route;
        })
        .forEach((route) => {

            server[route.method]({
                'path': route.path,
                'version': route.version
            }, route.handler);

        });

};
