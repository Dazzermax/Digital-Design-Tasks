import React from 'react';
import './Pointers.scss';



function Pointers(props) {
   
    return (
        <> 
            <div className="pointer pointer--channels">
                <p className="pointer-text">Создавай каналы и общайся!.. Сам с собой</p>
                <div className="arrow arrow--rotate-channels"></div>
            </div>
            <div className="pointer pointer--persons">
                <div className="arrow arrow--rotate-persons"></div>
                <p className="pointer-text">Переключайся между личностями!</p>
            </div>
        </>
    )
}


export default Pointers;