import React from 'react';
import './Header.scss';
import logo from '../../assets/png/logo.png';
import state from '../../store/mainStore';
import { Link } from 'react-router-dom';



function Header() {
    const {addUser} = state;
    const enterKey = 13;
    return (
        <header className="header">
            <Link className="logo-link" to="/" exact={true}>
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            <div className="person-container">
                <span className="person-invite">Введи свою личность:</span>
                <input  className="input-person"
                        type="text" 
                        placeholder="Введи и нажми Enter"  
                        onKeyDown = {
                                        (e) => {
                                            if (e.keyCode === enterKey) {
                                                addUser(e.target.value);
                                                e.target.value = '';
                                            }
                                        }
                                    }
                />
            </div>
        </header>
    )
}

export default Header;
