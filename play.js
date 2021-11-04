
const { connect } = require('./client')
const { setupInput } = require('./input')

// establishes a connection with the game server
let c = connect();
setupInput(c);
