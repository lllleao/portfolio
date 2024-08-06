import { useState } from 'react'

import Slider from '../Slider'

import * as S from './styles'
import avatar from '../../assets/perfil-fundo.png'
import cv from '../../assets/CV-atual.pdf'

const Home = () => {
    const [cvDownload, setCvDownload] = useState(false)

    const handleAnimation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        setCvDownload(true)
        setTimeout(() => {
            setCvDownload(false)
            const link = document.createElement('a')
            link.href = cv
            link.download = 'cv.pdf'
            link.click()
            document.body.appendChild(link)
            document.body.removeChild(link)
        }, 4000)
    }
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
                            <S.BntDownload
                                className="curriculo"
                                $download={cvDownload}
                                onClick={(e) => handleAnimation(e)}
                            >
                                <a href={cv} target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-file-arrow-down"></i>
                                    Currículo
                                </a>
                            </S.BntDownload>
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
