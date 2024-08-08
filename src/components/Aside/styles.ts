import styled from 'styled-components'
import { colors } from '../../globalStyle'

type Props = {
    $navPos: number
}

export const NavHamburguer = styled.nav`
    display: none;
    @media (max-width: 767px) {
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
        &:nth-child(1) {
            transform: rotate(0) translate(0);
        }
        &:nth-child(2) {
            transform: rotate(0) translate(0);
        }
        &:nth-child(3) {
            transform: rotate(0) translate(0);
        }
        transition:
            transform 0.3s ease,
            width 0.3s ease,
            margin 0.3s ease;
    }

    & .is-active-menu {
        li {
            &:nth-child(1) {
                transform: rotate(44deg) translate(2px, 1px);
                width: 18px;
            }
            &:nth-child(2) {
                transform: rotate(-44deg) translate(8px, -8px);
                width: 18px;
                margin: 0;
            }
            &:nth-child(3) {
                transform: rotate(0) translate(5px, -8px);
                width: 26px;
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
    padding: 6px;
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
                font-size: 0.8rem;
                cursor: pointer;
                border-radius: 50%;
            }
            &:nth-child(2) a {
                margin: 16px 0;
            }
        }
        &::after {
            content: '';
            border-radius: 50%;
            background-color: ${colors.purple};
            width: 30px;
            height: 30px;
            position: absolute;
            transition: top 0.1s linear;
            top: ${({ $navPos }) => ($navPos ? $navPos : '')}px;
            z-index: -1;
        }
    }

    @media (max-width: 767px) {
        top: 10%;
        padding: 6px 6px;
        right: auto;
        left: -18%;
        &.is-active {
            left: 4%;
        }

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
        ul {
            flex-direction: row;
            li {
                &:nth-child(2) a {
                    margin: 0 16px;
                }
            }

            &::after {
                transition: left 0.1s linear;

                top: 1px;
                ${({ $navPos }) => ($navPos === 1 ? 'left: 1px;' : '')}
                ${({ $navPos }) => ($navPos === 48 ? 'left: 45px;' : '')}
                ${({ $navPos }) => ($navPos === 95 ? 'left: 88px;' : '')}
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

    /* @media (max-width: 267px) {
        ul {
            &::after {

            }
        }
    } */
`

export const Aside = styled.aside`
    position: relative;
    z-index: 2;
`
