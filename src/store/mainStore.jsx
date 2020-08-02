import {observable, computed, action} from 'mobx';


class ChatStore {

    constructor() {
        this.sendMessage = this.sendMessage.bind(this);
    }

    @action sendMessage(value) {
        this.channels[0].messages.push(value)
    };

    @observable channels = [
        
        {
            name: 'general',
            messages: [],
        }, 

        {
            name: 'support',
            messages: [],
        }, 

        {
            name: 'mark',
            messages: [],
        }, 
    ]
   

    // @observable supportChat = {
    //     name: 'support',
    //     messages: [],
    // }

    // @observable markChat = {
    //     name: 'marketing',
    //     messages: [],
    // }
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