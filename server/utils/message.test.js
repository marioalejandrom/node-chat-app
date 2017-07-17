/**
 * Created by mario on 7/17/17.
 */
const expect  =  require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
   it('should generate the correct message object', () => {
       let message = {
           from: 'Mario',
           text: 'My text'
       };
       let response = generateMessage(message.from, message.text);

       expect(response.createdAt).toBeA('number');
       expect(response).toInclude(message);
   });
});