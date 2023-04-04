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