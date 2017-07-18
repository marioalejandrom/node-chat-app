/**
 * Created by mario on 7/18/17.
 */
const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
   it('should be false for non-string', () => {
      let res = isRealString(98);
      expect(res).toBe(false);
   });

    it('should be false for only spaces', () => {
        let res = isRealString('  ');
        expect(res).toBe(false);
    });

    it('should be true for string', () => {
        let res = isRealString('   test   ');
        expect(res).toBe(true);
    });
});