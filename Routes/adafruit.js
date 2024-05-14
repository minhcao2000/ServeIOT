const express = require('express')
const router = express.Router()
const Adafruit = require('../Controllers/adafruitController')
const TOPICS = require('../constants')

//connect adafruit
const connectAda = require('../configs/adafruit')
const client = connectAda()
Adafruit.handleReciveMessage(client)

router.get('/', (req, res) => {
    res.json({ success: true, data: Adafruit.data })
})


//topic: cambien1 | cambien2 | cambien3 | nutnhan1 | nutnhan2
//message: cambien: number, nutnhan: 0 | 1
router.post('/:topic/:message', async (req, res) => {
    await Adafruit.sendMessage(client, `IoTproject232/feeds/${req.params.topic}`, req.params.message)
    res.send('oke')
})

router.post('/', async (req, res) => {
    const { flow1, flow2, flow3, circle, startTime, endTime, selection4, selection5, selection6 } = req.body
    const clock = startTime + ' - ' + endTime
    console.log(clock)
    await Adafruit.sendMessage(client, TOPICS.ID1, flow1)
    await Adafruit.sendMessage(client, TOPICS.ID2, flow2)
    await Adafruit.sendMessage(client, TOPICS.ID3, flow3)
    await Adafruit.sendMessage(client, TOPICS.ID4, selection4)
    await Adafruit.sendMessage(client, TOPICS.ID5, selection5)
    await Adafruit.sendMessage(client, TOPICS.ID6, selection6)
    await Adafruit.sendMessage(client, TOPICS.CIRCLE, circle)
    await Adafruit.sendMessage(client, TOPICS.CLOCK, clock)

    res.json("okiela, quas meetj moir rooif")

})

module.exports = router