/**
 * Created by mario on 7/18/17.
 */
let moment = require('moment');

// let time =  new Date();
//
// console.log(time.getMonth());

let date  =  moment();

console.log(date.format('MMM Do, YYYY H:mm:ss a'));