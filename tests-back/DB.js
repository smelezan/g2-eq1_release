let mongoAddress = process.env.MONGO_TESTADDRESS || "localhost";
let mongoPORT = process.env.MONGO_TESTPORT || 27017;



if(process.env.NODE_ENV==='test'){

    module.exports = {
        DB: `mongodb://${mongoAddress}:${mongoPORT}/test`
    }
}
else {
    module.exports = {
        DB: `mongodb://${mongoAddress}:${mongoPORT}/Test-db`
    }
}
