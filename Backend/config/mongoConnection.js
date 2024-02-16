const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const mongoConfig =  {
  "serverUrl": process.env.serverUrl ,
  "database": "portfolio"
};

let _connection = undefined;
let _db = undefined;

module.exports = {
  dbConnection: async () => {
    if (!_connection) {
      _connection = await MongoClient.connect(mongoConfig.serverUrl);
      _db = await _connection.db(mongoConfig.database);
    }

    return _db;
  },
  closeConnection: () => {
    _connection.close();
  },
};
