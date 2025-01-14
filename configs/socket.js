const express = require('express')
const { createServer } = require('http');
const { monitorEventLoopDelay } = require('perf_hooks');


const app = express()
const server = createServer(app)
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8081"
  }
});

module.exports = { app, server, io }

