module.exports = function(app){

    const user = require('./Controller');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1.1 
    app.get('/devices/:userId', user.getDevice);

    // 2.1 
    app.get('/aircon/:userId', user.getAircon);

    //3.1
    app.get('/fire/:userId', user.getFire);

    //4.1
    app.get('/dust/:userId', user.getDust);

    //5.1
    app.get('/humi-temp/:userId/humi', user.getHumi);

    //5.2
    app.get('/humi-temp/:userId/temp', user.getTemp);

    //6.1
    app.get('/led/:userId', user.getLed);

    // //7.1
    // app.get('/switch/:userId', user.getSwitch);

    // //8.1
    // app.get('/farm/:userId', user.getFarm);

};