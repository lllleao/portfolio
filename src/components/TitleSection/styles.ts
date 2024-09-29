import styled from 'styled-components'

export const TitleContainer = styled.h2<{ $isAnimation?: boolean }>`
    text-align: center;
    color: #fff;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 3rem;
    ${({ $isAnimation }) =>
        $isAnimation
            ? `opacity: 0;
    &.is-active {
        animation: fadeOut 2s 0.5s ease forwards;
    }`
            : ''}
`
