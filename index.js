

module.exports = function(sails) {
    
    const setup = require('./lib/setup.js');
    const connect = require('./lib/connect.js');
    const sendCode = require('./lib/sendCode.js');
    const exec = require('./lib/exec')

    gladys.on('ready', function(){
        connect();
    });
    
    return {
        connect,
        setup,
        sendCode,
        exec
    };
};