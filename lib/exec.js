const Promise = require('bluebird');


module.exports = function exec(params){

    const portName = params.deviceType.identifier
    const message = `{"function_name":"Exec","deviceType":"${params.deviceType.id}","value":"${params.state.value}"}%`

    gladys.modules.serial.sendCode({portName, message})

    return Promise.resolve(true)

};