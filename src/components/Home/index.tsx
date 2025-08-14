import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { home } from '@store/reducers/intersection'

import Slider from '@components/Slider'

import * as S from './styles'

import avatar from '@images/perfil-fundo2.png'
import cv from '@images/CV.pdf'
import { useInView } from 'react-intersection-observer'
import { RootReducer } from '@store/index'

const Home = () => {
    const [cvDownload, setCvDownload] = useState(false)
    const { ref: myRef, inView } = useInView({ threshold: 0.2 })
    const [finished, setFinished] = useState(false)
    const [globalIndex, setGlobalIndex] = useState(0)
    const [letters, setLetters] = useState('')
    const [globalIndexOfArray, setGlobalIndexOfArray] = useState(0)
    const developmentControll = useRef(true)
    const { home: homeView, about, projects } = useSelector(
            (state: RootReducer) => state.intersection
        )
    const text = ['  Full Stack. ', ' TypeScript. ', ' Python. ']

    useEffect(() => {
        if (developmentControll.current) {
            developmentControll.current = false
            return undefined
        }
        if (!finished) {
            setTimeout(() => {
                let index = 0
                const intervelType = setInterval(() => {
                    if (
                        index + 1 < text[globalIndexOfArray].length &&
                        !finished
                    ) {
                        setLetters(
                            (prev) => prev + text[globalIndexOfArray][index]
                        )
                        index++
                    } else {
                        setGlobalIndex(index)
                        setGlobalIndexOfArray((prev) => prev + 1)
                        setFinished(true)
                        clearInterval(intervelType)
                    }
                }, 100)
            }, 500)
        }
    }, [finished])

    useEffect(() => {
        if (finished) {
            setTimeout(() => {
                let index = globalIndex
                const intervalDelete = setInterval(() => {
                    if (index < 0) {
                        if (globalIndexOfArray > text.length - 1) {
                            setGlobalIndexOfArray(0)
                        }
                        setFinished(false)
                        return clearInterval(intervalDelete)
                    }
                    index--
                    setLetters((prev) => prev.slice(0, index))
                }, 50)
            }, 1000)
        }
    }, [finished])

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(home(inView))
    }, [inView, dispatch, homeView, about, projects])

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
        <S.HeroContainer id="home" ref={myRef}>
            <S.Hero className="container">
                <S.Profile>
                    <img srcSet={avatar} alt="Leao Dev" />
                    <S.ProfileNav>
                        <ul>
                            <li className="instagram button-borders">
                                <a
                                    href="https://github.com/lllleao"
                                    href="https://github.com/lllleao"
                                    target="_blank"
                                    className="primary-button"
                                    rel="noreferrer"
                                >
                                    GITHUB
                                    GITHUB
                                </a>
                            </li>
                            <li className="github button-borders">
                                <a
                                    href="https://www.linkedin.com/in/lucas-leao-lima/"
                                    target="_blank"
                                    className="primary-button"
                                    rel="noreferrer"
                                >
                                    LINKEDIN
                                </a>
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
                    <p className="iam">Eu sou Lucas Leão</p>
                    <S.Tipy>
                        Sou Desenvolvedor{' '}
                        <span className="typed-text">{letters}</span>
                        <span className="vertical-bar">|</span>
                    </S.Tipy>
                </S.Message>
            </S.Hero>
            <Slider />
        </S.HeroContainer>
    )
}

export default Home
