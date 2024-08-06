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
    z-index: 3;

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
            z-index: 1;
            cursor: pointer;
            &:nth-child(2) {
                margin: 22px 0;
            }
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
    @media (min-width: 768px) and (max-width: 1279px) {
        padding: 6px 18px;

        ul {
            flex-direction: row;
            li {
                &:nth-child(2) {
                    margin: 0 18px;
                }
            }

            &::after {
                transition: left 0.1s linear;

                top: -2px;
                ${({ $navPos }) => ($navPos === -2 ? 'left: -3px;' : '')}
                ${({ $navPos }) => ($navPos === 55 ? 'left: 47px;' : '')}
                ${({ $navPos }) => ($navPos === 112 ? 'left: 94px;' : '')}
            }
        }
    }

    @media (max-width: 767px) {
        padding: 6px 6px;

        ul {
            li {
                font-size: 12px;
            }

            &::after {
                width: 30px;
                height: 30px;

                ${({ $navPos }) => ($navPos === -2 ? 'top: 1px;' : '')}
                ${({ $navPos }) => ($navPos === 55 ? 'top: 54px;' : '')}
                ${({ $navPos }) => ($navPos === 112 ? 'top: 107px;' : '')}
            }
        }
    }
`
