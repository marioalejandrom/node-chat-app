/**
 * Created by mario on 7/17/17.
 */
let moment = require('moment');

let generateMessage = (from, text) => {
  return {
      from,
      text,
      createdAt: moment().valueOf()
  };
};

let mapsUrl = 'http://www.google.com/maps?q=';

let generateLocationMessage = (from, lat, lng) => {
 return {
     from,
     url: `${mapsUrl}${lat},${lng}`,
     createdAt: moment().valueOf()
 };
};

module.exports = {generateMessage, generateLocationMessage};