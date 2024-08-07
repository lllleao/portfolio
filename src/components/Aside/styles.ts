import styled from 'styled-components'
import { colors } from '../../globalStyle'

type Props = {
    $navPos: number
}

export const NavHamburguer = styled.nav`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
    @media (max-height: 659px) and (max-width: 1101px) {
        display: block;
    }
    ul {
        padding: 8px;
        cursor: pointer;
        position: fixed;
        top: 5%;
        left: 4%;
    }
    li {
        width: 28px;
        height: 2px;
        border-radius: 50px;

        background-color: #fff;

        &:nth-child(2) {
            margin: 5px 0;
        }
        transition: transform 0.3s ease;
    }

    & .is-active-menu {
        li {
            &:nth-child(1) {
                transform: rotate(-56deg) translate(-5px, 4px);
            }
            &:nth-child(2) {
                transform: rotate(-56deg) translate(1px, 0px);
            }
            &:nth-child(3) {
                transform: rotate(53deg) translate(-5px, -6px);
            }
        }
    }
`

export const MenuDeskTop = styled.div<Props>`
    position: fixed;
    top: 5%;
    right: 4%;
    transition: left 0.3s ease-in 0.1s;

    background-color: ${colors.purpleLight};
    padding: 8px;
    border-radius: 1rem;

    ul {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        li {
            a {
                display: block;
                text-decoration: none;
                color: #fff;
                padding: 8px;
                font-size: 16px;
                cursor: pointer;
                border-radius: 50%;
            }
            &:nth-child(2) a {
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
            z-index: -1;
        }
    }

    @media (max-width: 767px) {
        padding: 6px 6px;
        right: auto;
        left: -18%;
        &.is-active {
            left: 15%;
        }
        /* @media (max-width: 480px) {
        } */

        ul {
            li {
                a {
                    font-size: 12px;
                }
            }

            &::after {
                left: 0;
                width: 30px;
                height: 30px;

                ${({ $navPos }) => ($navPos === -2 ? 'top: 1px;' : '')}
                ${({ $navPos }) => ($navPos === 55 ? 'top: 54px;' : '')}
                ${({ $navPos }) => ($navPos === 112 ? 'top: 107px;' : '')}
            }
        }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
        padding: 6px 18px;

        ul {
            flex-direction: row;
            li {
                &:nth-child(2) a {
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

    @media (max-height: 659px) and (max-width: 1101px) {
        right: auto;
        left: -10%;
        padding: 6px 6px;
        &.is-active {
            left: 10%;
        }

        ul {
            flex-direction: column;
            li {
                a {
                    font-size: 12px;
                }
                &:nth-child(2) a {
                    margin: 22px 0;
                }
            }
            &::after {
                left: 0;
                width: 30px;
                height: 30px;

                ${({ $navPos }) => ($navPos === -2 ? 'top: 1px;' : '')}
                ${({ $navPos }) => ($navPos === 55 ? 'top: 54px;' : '')}
                ${({ $navPos }) => ($navPos === 112 ? 'top: 107px;' : '')}
            }
        }
    }
`

export const Aside = styled.aside``
