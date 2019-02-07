const shared = require('./shared.js');

module.exports = function(params) {

  // if the port name is not specified
  if(params.portName === undefined || params.portName === null){
    // geting the first arduino finded on usb
    const ports = shared.getPorts();
    const port = ports[0];
    // write the code to the arduino
    port.write(params);
  } else {
    // else write the code on specified port name
    const port = shared.getSpecifiedPort(params.portName)
    port.write(params.message)
  }
    
};