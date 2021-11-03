
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server ...");
    conn.write('Name: NAM');
    // let move = 0;
    // setInterval(() => {
    //   move = Math.floor(Math.random() * 10) + 1;
    //   if (move % 2 === 0) conn.write("Move: up");   
    //   if (move % 3 === 0) conn.write("Move: down");   
    //   if (move % 4 === 0) conn.write("Move: left");   
    //   if (move % 5 === 0) conn.write("Move: right");   
    // },50);
  });
  
  conn.on('data', function(message){ // this is how we receive
    console.log(`Server says: ${message}`);
  });
  
  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    
    if (key === '\u0003') { // \u0003 maps to ctrl+c input
      console.log("......");
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = { connect, setupInput }





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
