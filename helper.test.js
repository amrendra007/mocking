/**
 * overiding socket function defining and adding it to 
 * require.cache object,  so next time node will use
 * this cached definition of function instead of original one
 */

const resolved = require('path').resolve('./socket.js')

require.cache[resolved] = {
    id: resolved,
    filename: resolved,
    loaded: true,
    exports: () => {
        //write your mock function logic here
        console.log('Mocked function for emitSocketData called ')
    }
}

/**
 * now requiring helper module here is important 
 * this require enable node to cache helper module in require.cache[require.resolve('./helper.js')]
 * with mocked version of emitSocketData function in require.cache[require.resolve('./helper.js')].children
 */

const helper = require('./helper')
helper();

