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

export const TitleAbout = styled.h2`
    text-align: center;
    color: #fff;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 3rem;
`

export const Story = styled.div`
    margin: 0 auto;
    color: #fff;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    text-align: justify;
    line-height: 3rem;
    width: 90%;
`
