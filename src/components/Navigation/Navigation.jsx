import React from 'react';
import Channels from './Channels/Channels';
import Friends from './Friends/Friends'
import './Navigation.scss';

function Navigation() {
    return (
        <aside className="navigation">
            <Channels/>
            <Friends />
        </aside>
    )
}

export default Navigation;