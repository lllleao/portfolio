import AboutMe from '../../components/AboutMe'
import Home from '../../components/Home'
import Projects from '../../components/Projects'
import { MainContainer } from './styles'

const Main = () => {
    return (
        <MainContainer>
            <Home />
            <AboutMe />
            <Projects />
        </MainContainer>
    )
}

export default Main
