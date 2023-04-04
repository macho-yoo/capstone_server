module.exports = function(app){

    const user = require('./Controller');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1.1 
    app.get('/devices/:userId', user.getDevice);

    // 2.1 
    app.get('/aircon/:userId', user.getAircon);
};