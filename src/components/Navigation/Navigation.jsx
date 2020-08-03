import React from 'react';
import Channels from './Channels/Channels';
import Persons from './Persons/Persons';
import './Navigation.scss';

function Navigation() {
    return (
        <aside className="navigation">
            <Channels/>
            <Persons />
        </aside>
    )
}

export default Navigation;