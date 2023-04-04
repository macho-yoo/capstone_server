const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const userDao = require("./Dao");

// Provider: Read 비즈니스 로직 처리

exports.retrieveDevice = async function (userIdx) {
  console.log("provider");
  const connection = await pool.getConnection(async (conn) => conn);
  const deviceResult = await userDao.selectDevice(connection, userIdx);

  connection.release();

  return deviceResult[0];
};

exports.retrieveAircon = async function (userIdx) {
  console.log("provider");
  const connection = await pool.getConnection(async (conn) => conn);
  const airconResult = await userDao.selectAircon(connection, userIdx);

  connection.release();

  return airconResult[0];
};

exports.retrieveFire = async function (userIdx) {
  console.log("provider");
  const connection = await pool.getConnection(async (conn) => conn);
  const fireResult = await userDao.selectFire(connection, userIdx);

  connection.release();

  return fireResult[0];
};

exports.retrieveDust = async function (userIdx) {
  console.log("provider");
  const connection = await pool.getConnection(async (conn) => conn);
  const dustResult = await userDao.selectDust(connection, userIdx);

  connection.release();

  return dustResult[0];
};

exports.retrieveHumi = async function (userIdx) {
  console.log("provider");
  const connection = await pool.getConnection(async (conn) => conn);
  const humiResult = await userDao.selectHumi(connection, userIdx);

  connection.release();

  return humiResult[0];
};

exports.retrieveTemp = async function (userIdx) {
  console.log("provider");
  const connection = await pool.getConnection(async (conn) => conn);
  const tempResult = await userDao.selectTemp(connection, userIdx);

  connection.release();

  return tempResult[0];
};


exports.retrieveLed = async function (userIdx) {
  console.log("provider");
  const connection = await pool.getConnection(async (conn) => conn);
  const ledResult = await userDao.selectLed(connection, userIdx);

  connection.release();

  return ledResult[0];
};



// exports.retrieveSwitch = async function (userIdx) {
//   console.log("provider");
//   const connection = await pool.getConnection(async (conn) => conn);
//   const switchResult = await userDao.selectSwitch(connection, userIdx);

//   connection.release();

//   return switchResult[0];
// };


// exports.retrieveFarm = async function (userIdx) {
//   console.log("provider");
//   const connection = await pool.getConnection(async (conn) => conn);
//   const farmResult = await userDao.selectFarm(connection, userIdx);

//   connection.release();

//   return farmResult[0];
// };