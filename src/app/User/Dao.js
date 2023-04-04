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


module.exports = {
  selectDevice,
  selectAircon,
};
