import React from 'react';
import './Channels.scss';
import state from '../../../store/mainStore';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';




const Channels = observer(() => {
    const { channels, addChannel } = state ;
    const enterKey = 13;
    const [showInput, toggleShowInput] = React.useState(false);

    // let showInput = false;
    // const toggleInput = () => {
    //     showInput = !showInput;
    // };
    return (
        <div className="channels">
            <div className="channels__header">
                <span className="channels__title">Channels</span>
                <span className="channels__counter">{channels.length}</span>
            </div>
            <button className="btn btn-add-channel" onClick={() => toggleShowInput(!showInput)}>Add channel</button>
            {showInput &&   <input  type="text" 
                                    className="input-add-channel" 
                                    placeholder="Type name channel..." 
                                    onKeyDown = {
                                        (e) => {
                                            if (e.keyCode === enterKey) {
                                                addChannel(e.target.value);
                                                e.target.value = '';
                                            }
                                        }
                                    }
                            />
            }
          
            <div className="channels__body">
                {channels.map((channel, i) => {
                    return <Link to={`/${channel.name}`} key = {i} className="channel">{`# ${channel.name}`}</Link>
                })}
            </div>        
        </div>
    )
})

export default Channels;