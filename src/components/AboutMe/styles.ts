import styled from 'styled-components'

export const About = styled.section`
    padding-top: 4rem;
    height: 100vh;
    @media (max-width: 767px) {
        height: 100%;
        padding-bottom: 4rem;
    }
    @media (max-height: 733px) {
        height: 100%;
        padding-bottom: 4rem;
    }
`

export const Story = styled.div`
    margin: 0 auto;
    color: #fff;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    text-align: justify;
    line-height: 3rem;
    width: 90%;

    .from-left {
        opacity: 0;
        &.is-active {
            animation: comingLeft 2s 0.5s ease forwards;
        }
    }

    .from-right {
        opacity: 0;
        &.is-active {
            animation: comingRight 2s 0.5s ease forwards;
        }
    }
`
