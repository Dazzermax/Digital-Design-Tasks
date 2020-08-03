import React from 'react';
import { observer } from 'mobx-react';
import state from '../../../store/mainStore';
import Person from './Person/Person';
import './Persons.scss';

const persons = observer(() => {

    const {persons} = state;

    return (
        <div className="persons">
            <div className="persons__header">
                <span className="persons__title">Твои Личности: </span>
                <span className="persons__counter">{persons.length}</span>
            </div>
            <div className="persons__body">
               {persons.map((person, i) => <Person person={person} key={i}/>)}
            </div>
        </div>
    )
})

export default persons;