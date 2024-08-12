import styled from 'styled-components'
type Props = {
    $hoverHeight: number
    $isFlipped: boolean
}

export const CardBack = styled.div<Props>`
    position: absolute;
    top: 0;
    padding: 1.5rem 1rem;
    overflow: auto;
    -webkit-overflow-scrolling: auto;
    max-height: 1000px;
    height: 100%;
    z-index: -1;

    border-radius: 1.5rem;
    background-color: #0d0d0d;
    transform: rotateY(180deg) scale(0.98);
    transition: margin 0.3s;
    p {
        text-align: justify;
        line-height: 2rem;
    }

    @media (min-width: 768px) {
        &::-webkit-scrollbar {
            border-radius: 1rem;
        }
        &::-webkit-scrollbar-track {
            background: #692599;
            border-radius: 1rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #000;
            border: 3px solid #692599;
            border-radius: 1rem;
        }
    }
`

export const CardFront = styled.div`
    padding: 1.5rem 1rem;
    background-color: #0d0d0d;
    width: 100%;
    backface-visibility: hidden;
    z-index: 1;

    img {
        border-radius: 1.5rem;
        width: 100%;
    }

    transition:
        transform 0.3s ease,
        border-radius 0.3s ease;

    &:hover {
        transform: scale(0.98);
        border-radius: 1.5rem;
    }
`

export const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin: 1rem 0;
    a {
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        text-align: center;
        text-decoration: none;
        padding: 0.4rem 1rem;
        border-radius: 0.3rem;

        svg {
            display: block;
            margin-right: 8px;
            transform-origin: center center;
            transition: transform 0.3s ease-in-out;
        }

        span {
            transition: transform 0.3s ease-in-out;
        }

        &:nth-child(1) {
            background-color: #101c5f;
        }

        &:nth-child(2) {
            background-color: #000;
        }
        &:nth-child(3) {
            background-color: #279b49;
        }

        &:hover .svg-wrapper {
            animation: fly-1 0.6s ease-in-out infinite alternate;
        }

        &:hover .arrow svg {
            transform: translateX(1.8rem) scale(1.1) rotate(45deg);
        }

        &:hover .github svg {
            transform: translateX(2em) scale(1.1);
        }

        &:hover span {
            transform: translateX(6em);
        }
    }
    @media (max-width: 1019px) {
        justify-content: center;
        align-items: center;
        /* flex-direction: column; */

        a {
            margin: 0;
        }
    }
`

export const ContainerFlip = styled.div`
    position: relative;
    flex: 0 1 calc(50% - 64px);
    transition: transform 1s;
    perspective: 1000px;
`

export const Card = styled.div<{ $isFlipped: boolean }>`
    position: relative;
    /* overflow: hidden; */
    height: max-content;
    background-image: linear-gradient(163deg, #6a218a 0%, #6139f2 100%);
    border-radius: 1.5rem;
    transition:
        transform 1s ease,
        box-shadow 0.3s ease;
    transform: ${({ $isFlipped }) =>
        $isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
    transform-style: preserve-3d;

    &:hover {
        box-shadow: 0px 0px 30px 1px rgb(46 0 255 / 30%);
    }
    @media (max-width: 767px) {
        margin: 0 auto 2rem;
        flex: 0;
        max-width: 450px;
    }
`

export const FlipButton = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 0.3rem;
    background-color: #279b49;
    position: absolute;
    transform-style: preserve-3d;
    z-index: 2;
    margin-top: 2rem;
`
