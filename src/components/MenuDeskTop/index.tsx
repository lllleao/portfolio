import { RootReducer } from '@store/index'
import { useSelector } from 'react-redux'
import { MenuDeskTopContainer } from './styles'

const MenuDeskTop = () => {
    const { about, home, projects } = useSelector(
        (state: RootReducer) => state.intersection
    )
    return (
        <MenuDeskTopContainer className="container">
            <a className="header-container__link" href="#home">
                <h1 className="header-container__link__title">
                    &lt;Lucas Leão &#47;&gt;
                </h1>
            </a>
            <nav>
                <ul className="header-container__nav">
                    <li
                        className={`header-container__nav__item ${home ? 'active' : ''}`}
                    >
                        <a
                            className={`header-container__nav__item__link ${home ? 'active__link' : ''}`}
                            href="#home"
                        >
                            HOME
                        </a>
                    </li>
                    <li
                        className={`header-container__nav__item ${about ? 'active' : ''}`}
                    >
                        <a
                            className={`header-container__nav__item__link ${about ? 'active__link' : ''}`}
                            href="#about"
                        >
                            SOBRE
                        </a>
                    </li>
                    <li
                        className={`header-container__nav__item ${projects ? 'active' : ''}`}
                    >
                        <a
                            className={`header-container__nav__item__link ${projects ? 'active__link' : ''}`}
                            href="#projects"
                        >
                            PROJETOS
                        </a>
                    </li>
                </ul>
            </nav>
        </MenuDeskTopContainer>
    )
}

export default MenuDeskTop
