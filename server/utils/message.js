/**
 * Created by mario on 7/17/17.
 */
let generateMessage = (from, text) => {
  return {from, text, createdAt: new Date().getTime()};
};

let mapsUrl = 'http://www.google.com/maps?q=';

let generateLocationMessage = (from, lat, lng) => {
 return {
     from,
     url: `${mapsUrl}${lat},${lng}`,
     createdAt: new Date().getTime()
 };
};

module.exports = {generateMessage, generateLocationMessage};