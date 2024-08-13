import { styled } from 'styled-components'

type Props = {
    $download: boolean
}

export const HeroContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 767px) {
        height: 100%;
    }
    @media (min-width: 768px) and (max-height: 615px) {
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
    max-height: 680px;
    img {
        width: 100%;
        animation: shadowImg 1s alternate infinite;
    }
    @media (max-width: 767px) {
        width: 100%;
        padding-top: 32px;
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
        /* font-weight: bold; */
        text-align: center;
        font-size: 1rem;
        @media (max-width: 318px) {
            grid-template-areas:
                'instagram'
                'github'
                'curriculo';
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }
        .primary-button {
            color: white;
            cursor: pointer;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 0.05rem;
            border: 1px solid #0e1822;
            padding: 0.8rem 2.1rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23FF4655 /* fill: %230E1822; */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
            background-color: #0e1822;
            background-size: 200%;
            background-position: 200%;
            background-repeat: no-repeat;
            transition: 0.3s ease-in-out;
            transition-property: background-position, border, color;
            position: relative;
            z-index: 1;
            width: 100%;
        }

        .primary-button:hover {
            border: 1px solid #ff4655;
            color: white;
            background-position: 40%;
        }

        .primary-button:before {
            content: '';
            position: absolute;
            background-color: #0e1822;
            width: 0.2rem;
            height: 0.2rem;
            top: -1px;
            left: -1px;
            transition: background-color 0.15s ease-in-out;
        }

        .primary-button:hover:before {
            background-color: white;
        }

        .primary-button:hover:after {
            background-color: white;
        }

        .primary-button:after {
            content: '';
            position: absolute;
            background-color: #ff4655;
            width: 0.3rem;
            height: 0.3rem;
            bottom: -1px;
            right: -1px;
            transition: background-color 0.15s ease-in-out;
        }

        .button-borders {
            position: relative;
        }

        .button-borders:before {
            content: '';
            position: absolute;
            width: calc(100% + 0.5em);
            height: 50%;
            left: -0.3em;
            top: -0.3em;
            border: 1px solid #fff;
            border-bottom: 0px;
        }

        .button-borders:after {
            content: '';
            position: absolute;
            width: calc(100% + 0.5em);
            height: 50%;
            left: -0.3em;
            bottom: -0.3em;
            border: 1px solid #fff;
            border-top: 0px;
            z-index: 0;
        }

        .shape {
            fill: #0e1822;
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

export const BntDownload = styled.li<Props>`
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(4px);
    }
    a {
        text-decoration: none;
        max-height: 48px;
        height: 100%;
        position: relative;
        display: block;
        padding: 1vh;
        background-color: #9047e5;
        font-size: clamp(1rem, 3vh, 1.2rem);
        cursor: pointer;
        border-radius: 8px;
        animation: ${({ $download }) =>
            $download
                ? 'buttonHeightClose 0.5s linear,buttonHeightOpen 1s linear 3s;'
                : 'none'};
        animation-fill-mode: forwards;
        overflow: hidden;

        i {
            font-size: 1rem;
            margin-right: 12px;
            animation: ${({ $download }) =>
                $download
                    ? 'buttonHeightClose 0.5s linear, buttonHeightOpen 1s linear 3s;'
                    : 'none'};

            animation-fill-mode: forwards;
        }

        &::after {
            content: '';
            background-color: #2688ff;
            position: absolute;
            inset: 0;
            width: 0;
            animation: ${({ $download }) =>
                $download
                    ? 'loader 1s linear 1s, loaderDeley 0.5s linear 2.5s;'
                    : 'none'};
            animation-fill-mode: forwards;
        }
    }
`

export const Message = styled.div`
    @media (max-width: 773px) and (max-height: 615px) {
        margin-bottom: 0;
        padding: 8px;
    }
    margin-bottom: 28px;
    h1 {
        font-size: clamp(1.5rem, 3vw, 3rem);
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
