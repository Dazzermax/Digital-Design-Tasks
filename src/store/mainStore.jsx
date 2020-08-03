import {observable, action} from 'mobx';


class ChatStore {

    constructor() {
        this.sendMessage = this.sendMessage.bind(this);
        this.addPerson = this.addPerson.bind(this);
        this.addChannel = this.addChannel.bind(this);
        this.setCurrentPerson = this.setCurrentPerson.bind(this);
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


    @observable persons = [
        {
            name: 'Billy'
        },

        {
            name: 'Arthur'
        },
    ];

    @observable currentPerson = this.persons[0];

    @observable selectedChannel;

    @action addPerson(name) {
        const person = {
            name
        }
        this.persons.push(person);
        this.setCurrentPerson(person);
    };

    @action sendMessage(value, chatName) {
        const findChat = this.channels.find(channel => channel.name === chatName);
        findChat.messages.push({
            messageText: value,
            personName: this.currentPerson.name,
            date: new Date(),
        });
    };

    @action setCurrentPerson(person) {
        this.currentPerson = person;
    }
   
    @action addChannel(value) {
        this.channels.push({name: value, messages:[]})
    }

    @action setSelectedChannel(name) {
        this.selectedChannel = name;
    }

    @action deleteChannel(name) {
        const index = this.channels.findIndex(channel => channel.name === name);
        this.channels.splice(index, 1);
    }

    @action deletePerson(name) {
        const index = this.persons.findIndex(person => person.name === name);
        this.persons.splice(index, 1);
    }

}


export default new ChatStore();

