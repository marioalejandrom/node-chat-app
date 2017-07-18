/**
 * Created by mario on 7/18/17.
 */
const expect = require('expect');
const  {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {id: '1', name: 'Mario', room: 'Test'},
            {id: '2', name: 'Alejandro', room: 'Test 2'},
            {id: '3', name: 'Jon', room: 'Test'}
        ]
    });

    it('Should add new user', () =>{
       let users = new Users();
       let user = {
           id: '123',
           name: 'Mario',
           room: 'My room'
       };
       let resUser = users.addUser(user.id, user.name, user.room);

       expect(users.users).toEqual([user]);
    });

    it('Should remove an user', () => {
        let user = users.removeUser('1');
        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('Should not remove an user', () => {
        let user = users.removeUser('123');
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('Should find an user', () => {
        let user = users.getUser('1');
        expect(user.id).toBe('1');
    });

    it('Should not find an user', () => {
        let user = users.getUser('123');
        expect(user).toNotExist();
    });

    it('Should return names for Test room', () => {
        userList = users.getUserList('Test');
        expect(userList).toEqual(['Mario', 'Jon']);
    });

    it('Should return names for Test 2 room', () => {
        userList = users.getUserList('Test 2');
        expect(userList).toEqual(['Alejandro']);
    });
});