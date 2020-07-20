import React from 'react';
import './Friends.scss';
import Person from './Person/Person'

const person = ['John Connor', 'John Donnor', 'John Jonnor', 'John Ronnor']

function Friends() {
    return (
        <div className="friends">
             <div className="friends__header">
                <span className="friends__title">Friends</span>
                <span className="friends__counter">11</span>
            </div>
            <div className="friends__body">
               {person.map(person => {
                   return <Person name={person}/>
               })}
            </div>
        </div>
    )
}

export default Friends;