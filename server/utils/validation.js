/**
 * Created by mario on 7/18/17.
 */
let isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};