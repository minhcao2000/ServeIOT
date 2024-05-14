const express = require('express')

var schedulers = []


const read = (req, res) => {
    res.json({ schedulers })
}

const create = async (req, res) => {
    await schedulers.push(req.body)
    res.json({ schedulers })
}

const remove = async (req, res) => {
    await schedulers.splice(req.params.index, 1)
    res.json({ schedulers })
}

module.exports = { read, create, remove }