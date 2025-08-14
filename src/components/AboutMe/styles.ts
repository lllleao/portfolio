import styled, { keyframes } from 'styled-components'

const comingLeft = keyframes`
    from {
            transform: translateX(-100px);
    } to {
        transform: translateX(0);
        opacity: 1;
    }
`

const comingRight = keyframes`
    from {
            transform: translateX(100px);
            opacity: 0;
    } to {
        transform: translateX(0);
        opacity: 1;
    }
`

export const About = styled.section<{$heightHeader: number}>`
    padding-top: ${({$heightHeader}) => $heightHeader}px;
    height: 100vh;
    overflow: hidden;
    @media screen and (max-width: 767px) {
        height: 100%;
    }
`

export const Story = styled.div`
    margin: 0 auto;
    color: #fff;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    text-align: justify;
    line-height: 3rem;
    width: 90%;

    .paragraph {
        opacity: 0;
        &.is-active-left {
            animation: ${comingLeft} 2s 0.5s ease forwards;
        }
        &.is-active-right {
            animation: ${comingRight} 2s 0.5s ease forwards;
        }
    }
`
