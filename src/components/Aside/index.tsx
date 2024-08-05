import { useState } from 'react'
import { Aside } from './styles'

const NavBar = () => {
    const [navActive, setNavActive] = useState(-2)
    return (
        <Aside $navPos={navActive}>
            <ul>
                <li onClick={() => setNavActive(-2)}>
                    <i className="fa-solid fa-house"></i>
                </li>
                <li onClick={() => setNavActive(55)}>
                    <i className="fa-regular fa-user"></i>
                </li>
                <li onClick={() => setNavActive(112)}>
                    <i className="fa-solid fa-clipboard-check"></i>
                </li>
            </ul>
        </Aside>
    )
}

export default NavBar
