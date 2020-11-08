let mongoAddress = process.env.MONGO_ISSUEADDRESS || "localhost";
let mongoPORT = process.env.MONGO_ISSUEPORT || 27017;



if(process.env.NODE_ENV==='test'){

    module.exports = {
        DB: `mongodb://${mongoAddress}:${mongoPORT}/test`
    }
}
else {
    module.exports = {
        DB: `mongodb://${mongoAddress}:${mongoPORT}/Issue-Sprint-db`
    }
}
