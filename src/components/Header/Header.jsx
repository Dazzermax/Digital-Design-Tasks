import React from 'react';
import './Header.scss';
import logo from '../../assets/png/logo.png';
import state from '../../store/mainStore';


function Header() {
    const {addUser} = state;
    const enterKey = 13;
    return (
        <header className="header">
            <a className="logo-link" href="#">
                <img className="logo" src={logo} alt="logo"/>
            </a>
            
            <input  type="text" 
                    placeholder="Vashe Imya"  
                    onKeyDown = {
                                    (e) => {
                                        if (e.keyCode === enterKey) {
                                            addUser(e.target.value);
                                            e.target.value = '';
                                        }
                                    }
                                }/>
        </header>
    )
}

export default Header;
