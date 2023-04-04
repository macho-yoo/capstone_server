async function selectDevice(connection, userIdx) {
  console.log("dao");
  const selectUserIdxQuery = `
                 SELECT *
                 FROM devices
                 WHERE useridx = ?;
                 `;
  const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
  return userRow;
}

async function selectAircon(connection, userIdx) {
  console.log("dao");
  const selectUserIdxQuery = `
                 SELECT *
                 FROM aircon
                 WHERE useridx = ?;
                 `;
  const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
  console.log(userRow);
  return userRow;
}

async function selectFire(connection, userIdx) {
  console.log("dao");
  const selectUserIdxQuery = `
                 SELECT *
                 FROM fire
                 WHERE useridx = ?;
                 `;
  const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
  console.log(userRow);
  return userRow;
}

async function selectDust(connection, userIdx) {
  console.log("dao");
  const selectUserIdxQuery = `
                 SELECT *
                 FROM dust
                 WHERE useridx = ?;
                 `;
  const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
  console.log(userRow);
  return userRow;
}

async function selectHumi(connection, userIdx) {
  console.log("dao");
  const selectUserIdxQuery = `
                 SELECT humi
                 FROM humi_temp
                 WHERE useridx = ?;
                 `;
  const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
  console.log(userRow);
  return userRow;
}

async function selectTemp(connection, userIdx) {
  console.log("dao");
  const selectUserIdxQuery = `
                 SELECT temp
                 FROM humi_temp
                 WHERE useridx = ?;
                 `;
  const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
  console.log(userRow);
  return userRow;
}

async function selectLed(connection, userIdx) {
  console.log("dao");
  const selectUserIdxQuery = `
                 SELECT LED1,LED2,LED3
                 FROM led
                 WHERE useridx = ?;
                 `;
  const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
  console.log(userRow);
  return userRow;
}


// async function selectSwitch(connection, userIdx) {
//   console.log("dao");
//   const selectUserIdxQuery = `
//                  SELECT temp
//                  FROM humi_temp
//                  WHERE useridx = ?;
//                  `;
//   const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
//   console.log(userRow);
//   return userRow;
// }


// async function selectFarm(connection, userIdx) {
//   console.log("dao");
//   const selectUserIdxQuery = `
//                  SELECT temp
//                  FROM humi_temp
//                  WHERE useridx = ?;
//                  `;
//   const [userRow] = await connection.query(selectUserIdxQuery, userIdx);
//   console.log(userRow);
//   return userRow;
// }







module.exports = {
  selectDevice,
  selectAircon,
  selectFire,
  selectDust,
  selectHumi,
  selectTemp,
  selectLed,
};
