/**
 * Created by mario on 7/17/17.
 */
const expect  =  require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let mapsUrl = 'http://www.google.com/maps?q=';
        let lat = 15;
        let lng = 19;
        let message = {
            from: 'Admin',
            url: `${mapsUrl}15,19`
        };
        let response = generateLocationMessage(message.from, lat, lng);

        expect(response.createdAt).toBeA('number');
        expect(response).toInclude(message);
    })
})