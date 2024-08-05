import styled from 'styled-components'
import { colors } from '../../globalStyle'

type Props = {
    $navPos: number
}
export const Aside = styled.aside<Props>`
    position: fixed;
    top: 5%;
    right: 5%;
    background-color: ${colors.purpleLight};
    padding: 8px;
    border-radius: 1rem;

    ul {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
            border-radius: 50%;

            color: #fff;
            padding: 8px;
            font-size: 16px;
            &:nth-child(2) {
                margin: 22px 0;
            }
            z-index: 1;
            cursor: pointer;
        }
        &::after {
            content: '';
            border-radius: 50%;
            background-color: ${colors.purple};
            width: 40px;
            height: 40px;
            position: absolute;
            transition: top 0.1s linear;
            top: ${({ $navPos }) => ($navPos ? $navPos : '')}px;
        }
    }
`
