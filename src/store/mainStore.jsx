import {observable, computed, action} from 'mobx';


class ChatStore {

    constructor() {
        this.sendMessage = this.sendMessage.bind(this);
    }

    @action sendMessage(value, chatName) {
        const findChat = this.channels.find(channel => channel.name === chatName);
        findChat.messages.push(value);
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

    
   
}


export default new ChatStore();

