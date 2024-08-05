import { useState } from 'react'
import { Aside } from './styles'

const NavBar = () => {
    const [navActive, setNavActive] = useState(3)
    return (
        <Aside $navPos={navActive}>
            <ul>
                <li onClick={() => setNavActive(3)}>
                    <i className="fa-solid fa-house"></i>
                </li>
                <li onClick={() => setNavActive(68)}>
                    <i className="fa-regular fa-user"></i>
                </li>
                <li onClick={() => setNavActive(133)}>
                    <i className="fa-solid fa-clipboard-check"></i>
                </li>
            </ul>
        </Aside>
    )
}

export default NavBar
