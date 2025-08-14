import { useEffect, useState } from 'react'
import { MenuBobContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { changeBackdropMenu } from '@store/reducers/intersection'
import { RootReducer } from '@store/index'

const MenuMob = () => {
    const [menuClicked, setMenuClicked] = useState(false)
    const dispatch = useDispatch()
    const { about, home, projects } = useSelector(
        (state: RootReducer) => state.intersection
    )

    const handleCllickMenu = () => {
        setMenuClicked(!menuClicked)
        dispatch(changeBackdropMenu(menuClicked))
    }

    const handleClickOptions = () => {
        setMenuClicked(false)
        dispatch(changeBackdropMenu(menuClicked))
    }

    return (
        <MenuBobContainer>
            <div
                className={`hamburguer-wrapper ${menuClicked ? 'hamburguer-wrapper__is-active-menu' : ''}`}
                onClick={handleCllickMenu}
            >
                <span className="hamburguer-wrapper__item"></span>
                <span className="hamburguer-wrapper__item"></span>
                <span className="hamburguer-wrapper__item"></span>
            </div>
            <aside
                className={`aside-container ${menuClicked ? 'active-menu-aside-backdrop' : ''}`}
            >
                <nav
                    className={`aside-container__nav ${menuClicked ? 'active-menu-aside' : ''}`}
                >
                    <ul className="aside-container__nav__list">
                        <li className="aside-container__nav__list__item">
                            <a
                                className={`aside-container__nav__list__item__link ${home ? 'active-aside' : ''}`}
                                onClick={handleClickOptions}
                                href="/#home"
                            >
                                HOME
                            </a>
                        </li>
                        <li className="aside-container__nav__list__item">
                            <a
                                className={`aside-container__nav__list__item__link ${about ? 'active-aside' : ''}`}
                                onClick={handleClickOptions}
                                href="/#about"
                            >
                                SOBRE
                            </a>
                        </li>
                        <li className="aside-container__nav__list__item">
                            <a
                                className={`aside-container__nav__list__item__link ${projects ? 'active-aside' : ''}`}
                                onClick={handleClickOptions}
                                href="/#projects"
                            >
                                PROJETOS
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </MenuBobContainer>
    )
}

export default MenuMob
