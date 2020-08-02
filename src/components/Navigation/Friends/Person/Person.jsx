import React from 'react';
import './Person.scss';
import { observer } from 'mobx-react';
import store from '../../../../store/mainStore';

    
const Person = observer((props) => {

    const {setCurrentUser, currentUser, deletePerson} = store;
    const isCurrentUser = props.user.name === currentUser.name;
    return (
        <>
            <div className="person" onClick={() => setCurrentUser(props.user)}>
                <div className={isCurrentUser ? "person__status person__status--active" : "person__status"}></div>
                <div className="person__avatar"></div>
                <div className="person__name">{props.user.name}</div>
                {/* {isCurrentUser ? <span>Eto vi</span> : null} */}
                <button className="btn btn-forget" onClick={() => deletePerson(props.user.name)}>Забыть</button>
            </div>
        </>
    )
})   


export default Person;
    
    
    
    
    
    
    
    
    
  