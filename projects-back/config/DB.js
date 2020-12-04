const mongoAddress = process.env.MONGO_PROJECTADDRESS || 'localhost';
const mongoPORT = process.env.MONGO_PROJECTPORT || 27017;

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    DB: `mongodb://${mongoAddress}:${mongoPORT}/test`,
  };
} else {
  module.exports = {
    DB: `mongodb://${mongoAddress}:${mongoPORT}/Projects-db`,
  };
}
