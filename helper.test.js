/**
 * socket file has emitSocketData function that is getting called in outer function
 * of helper.js, here i am mocking emitSocketData function
 */


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

//now requiring helper module here is important 
const helper = require('./helper')

// this require enable node to cache helper module in require.cache[require.resolve('./helper.js')]
// with mocked version of emitSocketData function in require.cache[require.resolve('./helper.js')].children

// const cachedHelperModule = require.cache[require.resolve('./helper.js')]
// console.log("cachedHelperModule", cachedHelperModule.children)

helper();

