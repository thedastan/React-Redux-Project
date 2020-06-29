// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('@babel/register')()

module.exports = require('./server/server.js')



const unsorted = [3,1,4,2]

const ascending  = [...unsorted].sort((a,b) => a-b).map(d => d * 10)

const descending = [...ascending].sort((a, b) => b-a)
  .map(d => d * 10)


console.log('unsorted', unsorted)

console.log('ascending', ascending)

console.log('descending', descending)