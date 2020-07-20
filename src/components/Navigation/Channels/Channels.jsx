import React from 'react';
import './Channels.scss';

function Channels() {
    return (
        <div className="channels">
            <div className="channels__header">
                <span className="channels__title">Channels</span>
                <span className="channels__counter">8</span>
            </div>
            <div className="channels__body">
                <div># Kanal 1</div>
                <div># Kanal 2</div>
                <div># Kanal 3</div>
                <div># Kanal 4</div>
                <div># Kanal 5</div>
            </div>        
        </div>
    )
}

export default Channels;