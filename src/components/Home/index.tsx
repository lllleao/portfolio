import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { home } from '@store/reducers/intersection'

import Slider from '@components/Slider'

import * as S from './styles'

import avatar from '@images/perfil-fundo2.png'
import cv from '@images/CV.pdf'
import { RootReducer } from '@store/index'

const Home = () => {
    const [textIndex, setTextIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const { heightHeader } = useSelector(
        (state: RootReducer) => state.intersection
    )
    const [cvDownload, setCvDownload] = useState(false)
    const [letters, setLetters] = useState('')

    const { ref: myRef, inView } = useInView({ threshold: 0.2 })

    const {
        home: homeView,
        about,
        projects
    } = useSelector((state: RootReducer) => state.intersection)
    const text = ['  Front End. ', ' Back End. ', ' Full Stack. ', ' Python. ', ' TypeScript. ']

    useEffect(() => {
        const currentText = text[textIndex]
        const typeSpeed = isDeleting ? 50 : 100
        const pauseAfterTyping = 1000
        const pauseAfterDeleting = 500

        const handleTyping = () => {
            if (!isDeleting) {
                if (letters.length < currentText.length) {
                    setLetters(
                        (current) => current + currentText[letters.length]
                    )
                    timeoutRef.current = setTimeout(handleTyping, typeSpeed)
                } else {
                    timeoutRef.current = setTimeout(
                        () => setIsDeleting(true),
                        pauseAfterTyping
                    )
                }
            } else {
                if (letters.length > 0) {
                    setLetters((prev) => prev.slice(0, -1))
                    timeoutRef.current = setTimeout(handleTyping, typeSpeed)
                } else {
                    timeoutRef.current = setTimeout(() => {
                        setIsDeleting(false)
                        setTextIndex((prev) => (prev + 1) % text.length)
                    }, pauseAfterDeleting)
                }
            }
        }

        timeoutRef.current = setTimeout(handleTyping, typeSpeed)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [letters, isDeleting, textIndex])

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
            link.href = 'https://github.com/lllleao/servidor_estatico/raw/main/CVit.pdf'
            link.download = 'cv.pdf'
            link.click()
            document.body.appendChild(link)
            document.body.removeChild(link)
        }, 4000)
    }
    return (
        <S.HeroContainer id="home">
            <S.Hero
                $heightHeader={heightHeader}
                ref={myRef}
                className="container mt-profile"
            >
                <S.Profile>
                    <img srcSet={avatar} alt="Leao Dev" />
                    <S.ProfileNav>
                        <ul>
                            <li className="instagram button-borders">
                                <a
                                    href="https://github.com/lllleao"
                                    target="_blank"
                                    className="primary-button"
                                    rel="noreferrer"
                                >
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
                                <a target="_blank" rel="noreferrer">
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
