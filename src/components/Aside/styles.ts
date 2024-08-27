import styled from 'styled-components'
import { colors } from '../../globalStyle'

type Props = {
    $navPos: string
}

const menuPositions = (current: string[], navPos: string) => {
    const positionMap = {
        '1': current[0],
        '48': current[1],
        '95': current[2]
    }

    return positionMap[navPos as keyof typeof positionMap] || ''
}

export const NavHamburguer = styled.nav`
    display: none;
    @media (max-width: 767px) {
        display: block;
    }

    @media (max-height: 794px) and (max-width: 786px) {
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
                font-size: 12px;
                cursor: pointer;
                border-radius: 50%;
            }
            &:nth-child(2) a {
                margin: 16px 0;
            }
        }
        &::after {
            --position: ${({ $navPos }) => $navPos}px;
            content: '';
            border-radius: 50%;
            background-color: ${colors.purple};
            width: 30px;
            height: 30px;
            position: absolute;
            transition: top 0.1s linear;
            top: var(--position);
            z-index: -1;
        }
    }

    @media (max-width: 767px) {
        top: 10%;
        padding: 6px;
        right: auto;
        left: -18%;
        &.is-active {
            left: 4%;
        }

        ul {
            &::after {
                --position: ${({ $navPos }) =>
                    menuPositions(['0', '3rem', '5.8rem'], $navPos)};
                left: 0;
            }
        }
    }
    @media (min-width: 787px) and (max-width: 1279px) {
        ul {
            flex-direction: row;
            li {
                &:nth-child(2) a {
                    margin: 0 16px;
                }
            }

            &::after {
                --position: ${({ $navPos }) =>
                    menuPositions(['0', '44px', '86px'], $navPos)};
                transition: left 0.1s linear;
                top: 1px;
                left: var(--position);
            }
        }
    }

    @media (max-height: 794px) and (max-width: 786px) {
        right: auto;
        left: -21%;
        top: 10%;
        padding: 6px;
        transition:
            top 0.3s,
            left 0.3s;
        &.is-active {
            top: 11%;
            left: 4%;
        }

        ul {
            flex-direction: column;

            &::after {
                --position: ${({ $navPos }) =>
                    menuPositions(['0', '3rem', '5.8rem'], $navPos)};
            }
        }
    }
`

export const Aside = styled.aside`
    position: relative;
    z-index: 2;
`
