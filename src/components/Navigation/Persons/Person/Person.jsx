import React from 'react';
import './Person.scss';
import { observer } from 'mobx-react';
import store from '../../../../store/mainStore';

    
const Person = observer((props) => {

    const {setCurrentPerson, currentPerson, deletePerson} = store;
    const isCurrentPerson = props.person.name === currentPerson.name;
    return (
        <>
            <div className="person" onClick={() => setCurrentPerson(props.person)}>
                <div className={isCurrentPerson ? "person__status person__status--active" : "person__status"}></div>
                <div className="person__avatar"></div>
                <div className="person__name">{props.person.name}</div>
                <button className="btn btn-forget" onClick={() => deletePerson(props.person.name)}>Забыть</button>
            </div>
        </>
    )
})   


export default Person;
    
    
    
    
    
    
    
    
    
  