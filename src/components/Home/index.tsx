import * as S from './styles'
import avatar from '../../assets/perfil-fundo.png'
import Slider from '../Slider'

const Home = () => {
    return (
        <S.HeroContainer>
            <S.Hero className="container">
                <S.Profile>
                    <img srcSet={avatar} alt="Leao Dev" />
                    <S.ProfileNav>
                        <ul>
                            <li className="instagram borderAnime">
                                <span>INSTAGRAM</span>
                            </li>
                            <li className="github borderAnime">
                                <span>LINKEDIN</span>
                            </li>
                            <li className="curriculo">
                                <i className="fa-solid fa-file-arrow-down"></i>
                                Currículo
                            </li>
                        </ul>
                    </S.ProfileNav>
                </S.Profile>
                <S.Message>
                    <h1>Lucas Leão</h1>
                    <p>
                        Dica rápida: uma boa presença online e profissional faz
                        toda a diferença. É por isso que estou aqui! Olá, eu sou
                        o Leão, desenvolvedor Front-End - rumo ao Full Stack.
                    </p>
                </S.Message>
            </S.Hero>
            <Slider />
        </S.HeroContainer>
    )
}

export default Home
