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
        </Aside>
    )
}

export default NavBar
