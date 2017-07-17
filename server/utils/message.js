/**
 * Created by mario on 7/17/17.
 */
let generateMessage = (from, text) => {
  return {from, text, createdAt: new Date().getTime()};
};

module.exports = {generateMessage};