const mongoAddress = process.env.MONGO_TASKADDRESS || 'localhost';
const mongoPORT = process.env.MONGO_TASKPORT || 27017;

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    DB: `mongodb://${mongoAddress}:${mongoPORT}/test`,
  };
} else {
  module.exports = {
    DB: `mongodb://${mongoAddress}:${mongoPORT}/Task-Sprint-db`,
  };
}
