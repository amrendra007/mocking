const  emitSocketData = require('./socket');
console.log("emitSocketData fn test", emitSocketData)


const outerFunction = () => {
    console.log('outer function get called')
    //want to mock this inner function call
    emitSocketData();
}

module.exports = outerFunction