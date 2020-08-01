import {observable, computed, action} from 'mobx';

export class ChatStore {

    @observable chats = []
   

    @action sendMessage() {
        console.log('jopa');
        this.chats.push('push')
    }

   
}


export default new ChatStore


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