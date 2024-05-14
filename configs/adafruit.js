require('dotenv').config()

const mqtt = require('mqtt')
const TOPICS = require('../constants')

const hehe2 = Buffer.from("YWlvX1pLV0M2NEhOSE1vb21jQ3JycVNFV09iU0p4NU4=", 'base64').toString('ascii')

const connectAda = () => {
    const topics = [TOPICS.ID1, TOPICS.ID2, TOPICS.ID3, TOPICS.ID4, TOPICS.ID5, TOPICS.ID6, TOPICS.CIRCLE, TOPICS.ACTIVE, TOPICS.CLOCK, TOPICS.NOTIFICATION]
    const client = mqtt.connect("mqtt://io.adafruit.com", {
        clean: true,
        port: 1883,
        connectTimeout: 4000,
        username: "IoTproject232",
        password: hehe2,
        reconnectPeriod: 1000,
    })

    client.on('connect', () => {
        console.log("Successfully connected to adafruit");
        client.subscribe(topics, () => {
            console.log(`Subscribe to all topic`)
        });
    });
    return client;
}

module.exports = connectAda;
