import {observable, computed, action} from 'mobx';


class ChatStore {

    constructor() {
        this.sendMessage = this.sendMessage.bind(this);
        this.addUser = this.addUser.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);
    }

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


    @observable users = [
        {
            name: 'Oleg'
        }
    ];

    @observable currentUser = this.users[0];

    @action addUser(name) {
        const user = {
            name
        }
        this.users.push(user);
        this.setCurrentUser(user);
    };

    @action sendMessage(value, chatName) {
        const findChat = this.channels.find(channel => channel.name === chatName);
        findChat.messages.push({
            messageText: value,
            userName: this.currentUser.name
        });
    };

    @action setCurrentUser(user) {
        this.currentUser = user;
    }
   
}


export default new ChatStore();

