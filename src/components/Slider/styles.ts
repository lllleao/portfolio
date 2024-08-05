import { styled } from 'styled-components'

export const Skills = styled.div`
    max-height: 45px;
    /* height: 100%; */
    overflow: hidden;
    padding-bottom: 8px;
    display: flex;
    .techs {
        /* height: 100%; */
        animation: sliderFooter 35s linear infinite;

        i {
            font-size: clamp(8px, 4vh, 32px);
            margin-right: 34px;
        }
    }
`
