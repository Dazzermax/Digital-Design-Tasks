import React from 'react';
import './Profile.scss';
import { observer } from 'mobx-react';
import store from '../../store/mainStore';

const Profile = observer(() => {

    const {currentUser} = store;
    return (
        <div className="profile">
            <div className="profile__avatar">Avatar</div>
            <div className="profile__name"> {currentUser.name} </div>
            <div className="profile__email"> poehovhi{currentUser.name}@gobel.com </div>
        </div>
    )
})

export default Profile;