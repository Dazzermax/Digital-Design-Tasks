import React from 'react';
import './Channels.scss';
import state from '../../../store/mainStore';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

const Channels = observer(() => {
    const { channels, addChannel, setSelectedChannel, selectedChannel, deleteChannel } = state ;
    const enterKey = 13;
    const [showInput, toggleShowInput] = React.useState(false);
  
    return (
        <div className="channels">
            <div className="channels__header">
                <span className="channels__title">Каналы:</span>
                <span className="channels__counter">{channels.length}</span>
                <button className="btn btn-add-channel" onClick={() => toggleShowInput(!showInput)}>Добавить</button>
            </div>
            {showInput &&   <input  type="text" 
                                    className="input-add-channel" 
                                    placeholder="Введи имя канала и нажми Enter..." 
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
                    return <Link to={`/${channel.name}`} 
                            key = {i} 
                            className={channel.name === selectedChannel ? "channel channel-active" : "channel"} 
                            onClick={() => setSelectedChannel(channel.name)}> 
                                    {`# ${channel.name}`}
                                    <button className="btn btn-delete" 
                                            onClick={() => deleteChannel(channel.name)}
                                            title="Удалить" 
                                    />
                            </Link>
                })}
            </div>        
        </div>
    )
})

export default Channels;