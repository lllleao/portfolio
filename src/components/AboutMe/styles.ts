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

export const About = styled.section<{ $heightHeader: number }>`
    padding-top: ${({ $heightHeader }) => $heightHeader}px;
    min-height: 100vh;
    overflow: hidden;
`

export const Story = styled.div`
    margin: 0 auto;
    color: #fff;
    font-size: clamp(1rem, 2vw, 1.3rem);
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
