var moment  = require('moment');

console.log(moment().format())

var now = moment();


console.log('Current timeStamp', now.format('LLL'))

console.log('Current timeStamp', now.unix())
