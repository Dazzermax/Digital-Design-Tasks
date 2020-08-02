import React from 'react';
import './Pointers.scss';



function Pointers(props) {
   
    return (
        <> 
            <div className="pointer-container-channels">
                <div className="arrow"></div>
                <p className="pointer-text">Создавай каналы и общайся!.. Сам с собой"</p>
            </div>
            <div className="pointer-container-persons">
                <p className="pointer-text">Переключайся между личностями!</p>
                <div className="arrow"></div>
            </div>
            <div className="pointer-container-add">
                <div className="arrow"></div>
                <p className="pointer-text">Добавляй личности!</p>
            </div>
        </>
    )
}


export default Pointers;