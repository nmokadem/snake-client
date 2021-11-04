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

module.exports = { setupInput }
