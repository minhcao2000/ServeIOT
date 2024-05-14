const express = require('express')
const router = express.Router()
const Scheduler = require("../Controllers/schedulerController")

router.get('/', Scheduler.read)
router.post('/', Scheduler.create)
router.delete('/:index', Scheduler.remove)

module.exports = router
