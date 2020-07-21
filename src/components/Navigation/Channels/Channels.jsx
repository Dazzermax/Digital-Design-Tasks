import React from 'react';
import './Channels.scss';
import { Link } from 'react-router-dom';

function Channels() {
    return (
        <div className="channels">
            <div className="channels__header">
                <span className="channels__title">Channels</span>
                <span className="channels__counter">8</span>
            </div>
            <div className="channels__body">
                <Link className="channel" to="/general"># general</Link>
                <Link className="channel" to="/"># support</Link>
                <Link className="channel"># marketing</Link>
                <Link className="channel"># thailand</Link>
                <Link className="channel"># jobs</Link>
                <Link className="channel"># startups</Link>
                <Link className="channel"># freelance</Link>
            </div>        
        </div>
    )
}

export default Channels;