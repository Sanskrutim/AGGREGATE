// Node.js code using serialport to read data from Arduino
const SerialPort = require('serialport');

const express = require('express');

const app=express();
const parsers=SerialPort.parsers;
const parser=new parsers.readline({
  delimeter:"\r\n"
})
var port=new SerialPort("",{
  baudRate:9600,
  dataBits:0,
  parity:'none',
  stopBits:1,
  flowControl:false
})
port.pipe(parser)

let arduinoData = ''; // Variable to store Arduino data

port.on('open', () => {
  console.log('Serial port open');
}); 

parser.on('data', (data) => {
  console.log('Data from Arduino:', data);
  arduinoData = data; // Update the arduinoData variable with the latest data
});

app.get('/data', (req, res) => {
  res.send(arduinoData);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});