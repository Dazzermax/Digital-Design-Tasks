import React from 'react';
import './Friends.scss';
import { observer } from 'mobx-react';
import state from '../../../store/mainStore';
import User from './Person/Person';


const Friends = observer(() => {

    const {users} = state;

    return (
        <div className="friends">
            <div className="friends__header">
                <span className="friends__title">Твои Личности: </span>
                <span className="friends__counter">{users.length}</span>
            </div>
            <div className="friends__body">
               {users.map((user, i) => <User user={user} key={i}/>)}
            </div>
        </div>
    )
})

export default Friends;