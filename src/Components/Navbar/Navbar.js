import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }


    }, [])

    return (
        <nav>
            {(toggleMenu || width > 500) && (
                <ul className="liste">
                    <li className="items"><Link to='/'>Home</Link></li>
                    <li className="items"><Link to='/write'>Write an article</Link></li>
                </ul>
            )}
            <button onClick={toggleNav} className="btn">menu</button>
        </nav>
    );
}