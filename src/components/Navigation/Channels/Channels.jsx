import React from 'react';
import './Channels.scss';
import state from '../../../store/mainStore';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';



const Channels = observer(() => {
    const { channels } = state 
    return (
        <div className="channels">
            <div className="channels__header">
                <span className="channels__title">Channels</span>
                <span className="channels__counter">{channels.length}</span>
            </div>
            <div className="channels__body">
                {channels.map((channel, i) => {
                    return <Link to={`/${channel.name}`} key = {i} className="channel">{`# ${channel.name}`}</Link>
                })}
            </div>        
        </div>
    )
})

export default Channels;