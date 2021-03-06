var _ = require('lodash');
var heroin = require('heroin-js');

var prod = {
    name:'superswag',
    domains: [ 'superswag.herokuapp.com' ]
};

var config = _.merge({}, require('./base'), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN);
configurator(config);
