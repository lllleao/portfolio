import { Aside, MenuDeskTop, NavHamburguer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '@store/index'
import { useState } from 'react'
import { about, home, projects } from '@store/reducers/intersection'

const NavBar = () => {
    const { isInsideNumber } = useSelector(
        (state: RootReducer) => state.intersection
    )

    const [isClicked, setIsClicked] = useState(false)
    const dispatch = useDispatch()

    return (
        <Aside>
            <MenuDeskTop
                className={isClicked ? 'is-active' : ''}
                $navPos={String(isInsideNumber)}
            >
                <ul>
                    <li>
                        <a href="#home" onClick={() => dispatch(home(true))}>
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => dispatch(about(true))}>
                            <i className="fa-regular fa-user"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={() => dispatch(projects(true))}
                        >
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
