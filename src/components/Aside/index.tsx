import { useState } from 'react'
import { Aside } from './styles'

const NavBar = () => {
    const [navActive, setNavActive] = useState(-2)
    return (
        <Aside $navPos={navActive}>
            <ul>
                <li onClick={() => setNavActive(-2)}>
                    <a href="#home">
                        <i className="fa-solid fa-house"></i>
                    </a>
                </li>
                <li onClick={() => setNavActive(55)}>
                    <a href="#about">
                        <i className="fa-regular fa-user"></i>
                    </a>
                </li>
                <li onClick={() => setNavActive(112)}>
                    <a href="#projects">
                        <i className="fa-solid fa-clipboard-check"></i>
                    </a>
                </li>
            </ul>
        </Aside>
    )
}

export default NavBar
