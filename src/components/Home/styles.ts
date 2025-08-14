import { keyframes, styled } from 'styled-components'

type Props = {
    $download: boolean
}

const type = keyframes`
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
`

const coming = keyframes`
    from {
        transform: translateX(10%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`

export const HeroContainer = styled.section`
    height: 100vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 949px){
        height: 100%;
    }
`
export const Hero = styled.div<{$heightHeader: number}>`
    display: flex;
    gap: 122px;
    align-items: center;

    &.container {
        margin-top: ${({$heightHeader}) => $heightHeader + 32}px;
    }

    @media (max-width: 949px) {
        margin-bottom: 4rem;
    }

    @media (max-width: 948px) {
        flex-direction: column;
        gap: 28px;
    }
`
export const Profile = styled.div`
    padding: 16px;
    max-width: 407px;
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
        @media (max-width: 399px) {
            grid-template-areas:
                'instagram'
                'github'
                'curriculo';
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }
        .primary-button {
            display: block;
            text-decoration: none;
            color: white;
            cursor: pointer;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 0.05rem;
            border: 1px solid #0e1822;
            padding: 0.8rem 2.1rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E%20.shape%20%7B%20fill:%20%239047E5;%20%7D%20%3C/style%3E%3C/defs%3E%3Cg%20id='Layer_2'%20data-name='Layer%202'%3E%3Cg%20id='Layer_1-2'%20data-name='Layer%201'%3E%3Cpolygon%20class='shape'%20points='415.81%20200%200%20200%20115.47%200%20531.28%200%20415.81%20200'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            background-color: #0e1822;
            background-size: 200%;
            background-position: 200%;
            background-repeat: no-repeat;
            transition: 0.5s ease-in-out;
            transition-property: background-position, border, color;
            position: relative;
            z-index: 1;
            width: 100%;
        }

        .primary-button:hover {
            border: 1px solid #0e1822;
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
            transition:
                background-color 0.15s ease-in-out,
                width 0.15s ease-in-out,
                height 0.15s ease-in-out;
        }

        .primary-button:hover:before {
            width: 0.5rem;
            height: 0.5rem;
            background-color: #2b0b39;
        }

        .primary-button:hover:after {
            width: 0.5rem;
            height: 0.5rem;
            background-color: #2b0b39;
        }

        .primary-button:after {
            content: '';
            position: absolute;
            background-color: #9047e5;
            width: 0.3rem;
            height: 0.3rem;
            bottom: -1px;
            right: -1px;
            transition:
                background-color 0.15s ease-in-out,
                width 0.15s ease-in-out,
                height 0.15s ease-in-out;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 784px;
    width: 100%;
    margin-bottom: 28px;
    @media (max-width: 773px) and (max-height: 615px) {
        margin-bottom: 0;
        padding: 8px;
    }
    .iam {
        font-size: clamp(1.5rem, 3vw, 3rem);
        font-family: 'Philosopher';
        letter-spacing: 0.5rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 1rem;
        text-shadow: 8px 8px 12px #000;
        animation: ${coming} 1s ease;
        overflow: hidden;
    }
`
export const Tipy = styled.p`
    font-size: clamp(1rem, 4vw, 2rem);
    text-shadow: 8px 8px 12px #000;
    .vertical-bar {
        display: inline-block;
        margin-left: 0.2rem;
        animation: ${type} 0.3s infinite;
        color: #eb2ac4;
        font-size: clamp(1rem, 4vw, 2rem);
        font-weight: bold;
    }
    .typed-text {
        color: #eb2ac4;
        font-weight: bold;
    }
`
