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
 
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput }
