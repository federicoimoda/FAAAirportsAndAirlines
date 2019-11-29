const db = require("./controllers/dbController");
const data = require("./data/loadData");
const subs = require("./controllers/subscriptorController");
const server = require("./controllers/serverController");
const publish = require("./controllers/publishController");
const config = require("./config")


var app = async function (){

    db.initDataBase();

    if (config.load_data) { await data.airlines_load() };
    if (config.load_data) { await data.airports_load() };
    
    await subs.subscriptor_deleteAll();
    
    server.server_create();
    
    publish.publish();

};

app();