const sendMessage = (client, topic, message) => {
    client.publish(topic, message, { qos: 0, retain: false }, (error) => {
        if (error) {
            console.error(error)
        }
        console.log('Send Message: ', message, topic)
    })
    return
}

var data = {
    active: 0,
    notification: 0
}

const { io } = require('../configs/socket')

io.on('connection', (socket) => {
    console.log('a user connected');
});



const handleReciveMessage = async (client) => {

    await client.on('message', (topic, message) => {

        const temp = parseInt(message)
        const deviceName = topic.split('/')[2]

        switch (deviceName) {
            case "active":
                data.active = temp
                break;

            case "notification":
                data.notification = temp
                break;

            default:
                console.log('deviceName does not exit')
                break;
        }
        console.log(data)
        io.emit("getData", data)
    })
}


// {
//     "flow1": "20",
//     "flow2": "30",
//     "flow3": "40",
//     "circle": "15",
//     "clock": "2:15 AM - 3:15 AM",
//     "selection4": true,
//     "selection5": true,
//     "selection6": false
// }

module.exports = { sendMessage, handleReciveMessage, data }