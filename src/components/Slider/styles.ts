import { styled } from 'styled-components'

export const Skills = styled.div`
    max-height: 45px;
    overflow: hidden;
    padding-bottom: 8px;
    display: flex;
    .techs {
        animation: sliderFooter 35s linear infinite;
        cursor: pointer;
        i {
            font-size: clamp(8px, 4vh, 32px);
            margin-right: 34px;
        }
    }
    &:hover .techs {
        animation-play-state: paused;
    }
`
