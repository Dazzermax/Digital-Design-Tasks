import {observable, computed, action} from 'mobx';


class ChatStore {

    constructor() {
        this.sendMessage = this.sendMessage.bind(this);
        this.addUser = this.addUser.bind(this);
        this.addChannel = this.addChannel.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.setSelectedChannel = this.setSelectedChannel.bind(this);
        this.deleteChannel = this.deleteChannel.bind(this);
    }

    @observable channels = [
        
        {
            name: 'general',
            messages: [],
        }, 
     
    ]


    @observable users = [
        {
            name: 'Oleg'
        }
    ];

    @observable currentUser = this.users[0];

    @observable selectedChannel = this.channels[0].name;

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
   
    @action addChannel(value) {
        this.channels.push({name: value, messages:[]})
    }

    @action setSelectedChannel(name) {
        this.selectedChannel = name;
    }

    @action deleteChannel(name) {
        const index = this.channels.findIndex((channel) => channel.name == name);
        this.channels.splice(index, 1);
    }

}


export default new ChatStore();

