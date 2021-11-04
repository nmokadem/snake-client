let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    
    if (key === '\u0003') { // \u0003 maps to ctrl+c input
      console.log("Good Bye!");
      process.exit();
    }

    if (key === 'w') {
      //console.log("Move: up");
      connection.write("Move: up");
    }
    if (key === 'a') {
      //console.log("Move: left");
      connection.write("Move: left");
    }
    if (key === 's') {
      //console.log("Move: down");
      connection.write("Move: down");
    }
    if (key === 'd') {
      //console.log("Move: right");
      connection.write("Move: right");
    }

    if (key == '\u001B\u005B\u0041') {
      connection.write('Say: Go U'); 
    }
    if (key == '\u001B\u005B\u0043') {
      connection.write('Say: Go R'); 
    }
    if (key == '\u001B\u005B\u0042') {
      connection.write('Say: Go D'); 
    }
    if (key == '\u001B\u005B\u0044') {
      connection.write('Say: Go L'); 
    }
 
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput }
