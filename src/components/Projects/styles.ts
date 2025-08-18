import styled from 'styled-components'

export const ProjectContainer = styled.section<{ $heightHeader: number }>`
    padding-top: ${({ $heightHeader }) => $heightHeader}px;
    .projects-container {
        padding: 4rem 0;
        min-height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        margin: 0 auto;

        @media (max-width: 767px) {
            display: block;
        }
    }
`
export const Tags = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1.5rem 0 0.5rem;
    li {
        margin-right: 0.5rem;
        margin-bottom: 6px;
        i {
            font-size: 32px;
        }
    }
`
