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
                <div className="channel"># Kanal 1</div>
                <div className="channel"># Kanal 2</div>
                <div className="channel"># Kanal 3</div>
                <div className="channel"># Kanal 4</div>
                <div className="channel"># Kanal 5</div>
                <div className="channel"># Kanal 6</div>
                <div className="channel"># Kanal 7</div>
            </div>        
        </div>
    )
}

export default Channels;