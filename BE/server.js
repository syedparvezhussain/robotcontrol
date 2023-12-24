const express = require('express')
const socketIo = require("socket.io");
const http = require("http");
const app = express()
let angle = 0;
const server = http.createServer(app);
server.listen(5001, (err) => {
    if (err) console.log(err);
    console.log("Server running on Port ", 5001);
  });
const io = socketIo(server, {
    cors: {
      origin: "http://172.18.161.245:3000",
    },
  });
  io.on("connection", (socket) => {
    console.log("client connected: ", socket.id);
  
    socket.join("clock-room");
  
    socket.on("disconnect", (reason) => {
      console.log(reason);
    });
  });
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/setServoAngle', function(req, res){
    angle=req.query.angle;
    console.log(angle);
    res.send("angle updated successfully "+angle)
})

app.get('/getServoAngle', function(req, res){
    angle=angle;
    console.log(angle);
    res.send(String(angle));
})

app.get('/sensorInput', function (req, res){
   const  sound = req.query.sound;
   const heart = req.query.heart;
   const dist = req.query.dist;
   const ir = req.query.ir;
   const temp = req.query.temp;
   const humid = req.query.humid;
   console.log("sound: "+sound+ " heart: "+heart+" distance: "+ dist+" ir: "+ir+" temperature: "+ temp+ " humidity: "+humid );
   const data = {
    sound:sound || "",
    heart:heart || "",
    ir:ir || "",
    temp:temp || "",
    humid:humid || "",
    dist:dist || ""     
   }
   io.to("clock-room").emit("Event", data);

//    res.send({ express: data }); //Line 10
   res.send("data updated success");


})

app.listen(5000)