import styled from 'styled-components'

export const TitleContainer = styled.h2<{ $isAnimation?: boolean }>`
    position: relative;
    padding-bottom: 2rem;
    text-align: center;
    color: #fff;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 3rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 40%;
        width: 20%;
        height: 8px;
        background-color: #7E4596;
    }
`
