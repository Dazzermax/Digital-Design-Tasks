import React from 'react';
import './Profile.scss';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__avatar">Avatar</div>
            <div className="profile__name"> Name </div>
            <div className="profile__email">Email </div>
        </div>
    )
}

export default Profile;