import {observable, computed, action} from 'mobx';


class ChatStore {

    constructor() {
        this.sendMessage = this.sendMessage.bind(this);
        this.addUser = this.addUser.bind(this);
        this.addChannel = this.addChannel.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.setSelectedChannel = this.setSelectedChannel.bind(this);
        this.deleteChannel = this.deleteChannel.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }

    @observable channels = [
        {
            name: 'general',
            messages: [],
        }, 

        {
            name: 'psycho',
            messages: [],
        }, 
    ]


    @observable users = [
        {
            name: 'Billy'
        },

        {
            name: 'Arthur'
        },
    ];

    @observable currentUser = this.users[0];

    @observable selectedChannel;

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
            userName: this.currentUser.name,
            date: new Date(),
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
        const index = this.channels.findIndex(channel => channel.name == name);
        this.channels.splice(index, 1);
    }

    @action deletePerson(name) {
        const index = this.users.findIndex(user => user.name == name);
        this.users.splice(index, 1);
    }

}


export default new ChatStore();

