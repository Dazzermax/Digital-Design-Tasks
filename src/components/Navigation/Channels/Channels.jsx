import React from 'react';
import './Channels.scss';
import { Link } from 'react-router-dom';


const channels = ['general', 'support', 'marketing', 'thailand', 'jobs', 'startups', 'freelance'];

function Channels() {
    return (
        <div className="channels">
            <div className="channels__header">
                <span className="channels__title">Channels</span>
                <span className="channels__counter">{channels.length}</span>
            </div>
            <div className="channels__body">
                {channels.map(channel => {
                    return <Link to={"/" + channel} className="channel">{"#" + channel}</Link>
                })}
            </div>        
        </div>
    )
}

export default Channels;