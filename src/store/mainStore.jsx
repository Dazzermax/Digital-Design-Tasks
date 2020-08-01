import {observable, computed, action} from 'mobx';



class Chat {

    @observable params = {
        value : "",  
        disabled : null,
    }


    // @action bindData = (e, name) => {      
    //     this.params.value = getTarget(e).value;        
    // }; 
}


export default new Chat;


const person = ['John Connor', 'John Donnor', 'John Jonnor', 'John Ronnor', 'John Gonnor'];

const friends = [
    
    {
        online: true,
        name: 'John Connor',
    },
    {
        online: true,
        name: 'John Connor',
    },
    {
        online: true,
        name: 'John Connor',
    },
    {
        online: true,
        name: 'John Connor',
    },
    {
        online: true,
        name: 'John Connor',
    },
    {
        online: true,
        name: 'John Connor',
    },
  
]