import * as S from './styles'
import { ReactElement, useEffect, useRef, useState } from 'react'

type Props = {
    image: string
    description: string
    site: string
    github: string
    tags: ReactElement
    alt: string
}

const Card = ({ description, github, image, site, tags, alt }: Props) => {
    const [descHeight, setDescHeight] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const descRef = useRef<HTMLDivElement>(null)

    const handleGetHeight = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        setIsClicked(!isClicked)
    }

    useEffect(() => {
        if (descRef.current) {
            setDescHeight(descRef.current.clientHeight)
        }
    }, [])

    if (descRef.current) {
        console.log(descRef.current.clientHeight)
    }
    return (
        <S.ContainerFlip>
            <S.Card $isFlipped={isClicked}>
                <S.CardFront ref={descRef}>
                    <img srcSet={image} alt={alt} />

                    <S.Links>
                        <a href={site}>
                            <div className="svg-wrapper arrow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1rem"
                                    height="1rem"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                            </div>
                            <span>Ir para</span>
                        </a>
                        <a href={github}>
                            <div className="svg-wrapper github">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            </div>
                            <span>GitHub</span>
                        </a>
                        <a href="" onClick={(e) => handleGetHeight(e)}>
                            Ler mais
                        </a>
                    </S.Links>
                    {tags}
                </S.CardFront>
                <S.CardBack $isFlipped={isClicked} $hoverHeight={descHeight}>
                    <p>{description}</p>
                    <S.FlipButton onClick={(e) => handleGetHeight(e)}>
                        Voltar
                    </S.FlipButton>
                </S.CardBack>
            </S.Card>
        </S.ContainerFlip>
    )
}

export default Card
