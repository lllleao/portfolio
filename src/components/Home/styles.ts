import { styled } from 'styled-components'

export const HeroContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 767px) {
        height: 100%;
    }
`
export const Hero = styled.div`
    display: flex;
    height: 100%;
    gap: 122px;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        gap: 28px;
    }
`
export const Profile = styled.div`
    padding: 16px;
    width: 100%;
    img {
        width: 100%;
    }
    @media (max-height: 703px) and (min-width: 768px) {
        width: 100vh;
        img {
            display: block;
            margin: 0 auto;
            width: auto;
            height: 60vh;
        }
    }
    @media (max-width: 767px) {
        img {
            display: block;
            margin: 0 auto;
            width: 77%;
        }
    }
`
export const ProfileNav = styled.nav`
    margin-top: 32px;
    ul {
        width: 100%;
        display: grid;
        column-gap: 32px;
        grid-template-areas:
            'instagram github'
            'curriculo curriculo';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        row-gap: 2rem;
        font-weight: bold;
        text-align: center;
        @media (max-width: 318px) {
            grid-template-areas:
                'instagram'
                'github'
                'curriculo';
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }

        .borderAnime {
            width: 100%;
            position: relative;
            padding: 0.5rem;
            cursor: pointer;
            border: 2px solid #fff;

            &::before {
                position: absolute;
                content: '';
                top: -2px;
                left: 6px;
                background-color: #2b0b39;
                width: calc(100% - 12px);
                height: calc(100% + 4px);
                transform: scaleY(1);
            }

            &::after {
                position: absolute;
                content: '';
                top: 6px;
                left: -2px;
                background-color: #2b0b39;
                width: calc(100% + 4px);
                height: calc(100% - 12px);
                transform: scaleY(1);
            }

            span {
                position: relative;
                display: block;
                z-index: 2;
            }
        }

        .curriculo {
            display: block;
            padding: 1vh;
            background-color: #9047e5;
            font-size: clamp(1rem, 3vh, 1.2rem);
            cursor: pointer;
            border-radius: 8px;

            i {
                font-size: clamp(16px, 3vh, 22px);
                margin-right: 12px;
            }
        }
    }

    .instagram {
        grid-area: instagram;
    }
    .github {
        grid-area: github;
    }
    .curriculo {
        grid-area: curriculo;
    }
`

export const Message = styled.div`
    margin-bottom: 28px;
    h1 {
        font-size: clamp(1rem, 3vw, 3rem);
        font-family: 'Philosopher';
        letter-spacing: 0.5rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 1rem;
        text-shadow: 8px 8px 12px #000;
    }

    p {
        font-size: 1.3rem;
        font-size: clamp(1rem, 2vw, 1.3rem);
        line-height: 3rem;
        text-align: justify;
        text-shadow: 8px 8px 12px #000;
    }
`
