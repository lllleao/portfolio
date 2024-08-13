import { Aside, MenuDeskTop, NavHamburguer } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '@store/index'
import { useState } from 'react'

const NavBar = () => {
    const { isInsideNumber } = useSelector(
        (state: RootReducer) => state.intersection
    )
    const [isClicked, setIsClicked] = useState(false)

    return (
        <Aside>
            <MenuDeskTop
                className={isClicked ? 'is-active' : ''}
                $navPos={isInsideNumber}
            >
                <ul>
                    <li>
                        <a href="#home">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <i className="fa-regular fa-user"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <i className="fa-solid fa-clipboard-check"></i>
                        </a>
                    </li>
                </ul>
            </MenuDeskTop>
            <NavHamburguer>
                <ul
                    className={isClicked ? 'is-active-menu' : ''}
                    onClick={() => setIsClicked(!isClicked)}
                >
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </NavHamburguer>
        </Aside>
    )
}

export default NavBar
