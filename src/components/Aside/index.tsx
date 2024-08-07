import { Aside } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { about, home, projects } from '../../store/reducers/intersection'

const NavBar = () => {
    const dispatch = useDispatch()
    const { IsInside } = useSelector((state: RootReducer) => state.intersection)

    return (
        <Aside $navPos={IsInside}>
            <ul>
                <li onClick={() => dispatch(home(true))}>
                    <a href="#home">
                        <i className="fa-solid fa-house"></i>
                    </a>
                </li>
                <li onClick={() => dispatch(about(true))}>
                    <a href="#about">
                        <i className="fa-regular fa-user"></i>
                    </a>
                </li>
                <li onClick={() => dispatch(projects(true))}>
                    <a href="#projects">
                        <i className="fa-solid fa-clipboard-check"></i>
                    </a>
                </li>
            </ul>
        </Aside>
    )
}

export default NavBar
