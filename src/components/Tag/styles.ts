import styled from 'styled-components'

export const TagContainer = styled.li`
    padding: 0.2rem 1rem;
    border-radius: 0.2rem;
    background-color: #333130;
    color: #fff;
    &.tag-type-project {
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    &.front-end {
        background-color: #911c1c;
    }
    &.back-end {
        background-color: #1c62a3ff;
    }

    &.full-stack {
        background-color: #136f13;
    }
`
