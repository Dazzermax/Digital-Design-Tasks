import React from 'react';
import './Friends.scss';
import Person from './Person/Person'

const person = ['John Connor', 'John Donnor', 'John Jonnor', 'John Ronnor', 'John Gonnor'];

function Friends() {
    return (
        <div className="friends">
             <div className="friends__header">
                <span className="friends__title">Friends</span>
                <span className="friends__counter">{person.length}</span>
            </div>
            <div className="friends__body">
               {person.map(person => {
                   return <Person name={person} key={person}/>
               })}
            </div>
        </div>
    )
}

export default Friends;