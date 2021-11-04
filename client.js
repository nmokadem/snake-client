
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server ...");
    conn.write('Name: NAM');
  });
  
  conn.on('data', function(message){ // this is how we receive
    console.log(`Server says: ${message}`);
  });

  conn.on('end', function(){
    console.log('client is disconnected from the server.');
  }); 
  conn.on('error', function(){
    console.log('An error occurred, client is disconnected from the server.');
  }); 
  
  return conn;
};

module.exports = { connect }





// const net = require('net');
// const port = 50541;  //8009;

// const configObj = {
//   port: port,
//   host: 'localhost'
// };

// const client = net.createConnection(configObj);

// client.on('connect',function(){
//   console.log('client is connected to server.');
// });

// client.on('data', function(message){ // this is how we receive
//   console.log(`Server says: ${message}`);
// });

// process.stdin.on('data', function(message){ // this is how we send
//   client.write(message);
// });

// client.on('end', function(){
//   console.log('client is disconnected from the server.');
// }); 

//----------------------------------------------------------

// const net = require('net');
// const port = 14740;

// const configObj = {
// port: port,
// host: '4.tcp.ngrok.io'
// };

// const client = net.createConnection(configObj);

// client.on('connect',function(){
// console.log('client is connected to server.');
// });

// client.on('data', function(message){ // this is how we receive
// console.log(`Server says: ${message}`);
// });

// process.stdin.on('data', function(message){ // this is how we send
// client.write(message);
// });

// client.on('end', function(){
// console.log('client is disconnected from the server.');
// }); 
