import { computed, observable } from "mobx"

class Chat {
    @observable value
    @observable id
    @observable complete

    constructor(value) {
        this.value = value.msg
        this.userName = value.userName
        this.id = Date.now()
        this.complete = false
    }
}

export class ChatStore {
    @observable chats = []
    @observable nickName = ""
    sendMessage(value) {
        this.chats.push(new Chat(value))
    }
    inputNickName(value) {
        this.nickName = value;
        console.log("store", this.nickName)
    }
}

export default new ChatStore

