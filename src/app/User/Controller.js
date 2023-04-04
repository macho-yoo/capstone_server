const jwtMiddleware = require("../../../config/jwtMiddleware");
const userProvider = require("../../app/User/Provider");
const userService = require("../../app/User/userService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1.1
 * API Name : get device
 * [GET] /app/devices/{userId}
 */
exports.getDevice = async function (req, res) {
    /**
     * Path Variable: userId
     */
     console.log("controller");
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const userDevice = await userProvider.retrieveDevice(userId);
    return res.send(response(baseResponse.SUCCESS, userDevice));
};

exports.getAircon = async function (req, res) {
    /**
     * Path Variable: userId
     */
     console.log("controller");
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const userAircon = await userProvider.retrieveAircon(userId);
    return res.send(response(baseResponse.SUCCESS, userAircon));
};

exports.getFire = async function (req, res) {
    /**
     * Path Variable: userId
     */
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const userFire = await userProvider.retrieveFire(userId);
    return res.send(response(baseResponse.SUCCESS, userFire));
};

exports.getDust = async function (req, res) {
    /**
     * Path Variable: userId
     */
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const userDust = await userProvider.retrieveDust(userId);
    return res.send(response(baseResponse.SUCCESS, userDust));
};

exports.getHumi = async function (req, res) {
    /**
     * Path Variable: userId
     */
     console.log("controller");
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const userHumi = await userProvider.retrieveHumi(userId);
    return res.send(response(baseResponse.SUCCESS, userHumi));
};


exports.getTemp = async function (req, res) {
    /**
     * Path Variable: userId
     */
     console.log("controller");
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const userTemp = await userProvider.retrieveTemp(userId);
    return res.send(response(baseResponse.SUCCESS, userTemp));
};

exports.getLed = async function (req, res) {
    /**
     * Path Variable: userId
     */
     console.log("controller");
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const userLed = await userProvider.retrieveLed(userId);
    return res.send(response(baseResponse.SUCCESS, userLed));
};


// exports.getSwitch = async function (req, res) {
//     /**
//      * Path Variable: userId
//      */
//      console.log("controller");
//     const userId = req.params.userId;

//     if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

//     const userSwitch = await userProvider.retrieveSwitch(userId);
//     return res.send(response(baseResponse.SUCCESS, userSwitch));
// };


// exports.getFarm = async function (req, res) {
//     /**
//      * Path Variable: userId
//      */
//      console.log("controller");
//     const userId = req.params.userId;

//     if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

//     const userFarm = await userProvider.retrieveFarm(userId);
//     return res.send(response(baseResponse.SUCCESS, userFarm));
// };









/** JWT 토큰 검증 API
 * [GET] /app/auto-login
 */
exports.check = async function (req, res) {
    const userIdResult = req.verifiedToken.userId;
    console.log(userIdResult);
    return res.send(response(baseResponse.TOKEN_VERIFICATION_SUCCESS));
};
