import {observable, computed, action} from 'mobx';


class ChatStore {

    constructor() {
        this.sendMessage = this.sendMessage.bind(this);
    }

    @observable chats = [];
   

    @action sendMessage(value) {
        this.chats.push(value)
    };

}


export default new ChatStore();


// const person = ['John Connor', 'John Donnor', 'John Jonnor', 'John Ronnor', 'John Gonnor'];

// const friends = [
    
//     {
//         online: true,
//         name: 'John Connor',
//     },
//     {
//         online: true,
//         name: 'John Connor',
//     },
//     {
//         online: true,
//         name: 'John Connor',
//     },
//     {
//         online: true,
//         name: 'John Connor',
//     },
//     {
//         online: true,
//         name: 'John Connor',
//     },
//     {
//         online: true,
//         name: 'John Connor',
//     },
  
// ]