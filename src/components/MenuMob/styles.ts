import styled from 'styled-components'

export const MenuBobContainer = styled.div`
    padding-right: 1rem;
    padding-top: 1rem;
    margin-left: auto;
    .hamburguer-wrapper {
        display: none;
        z-index: 3;
        padding: 8px;
        cursor: pointer;
        position: fixed;
        top: 20px;
        right: 20px;
        &__item {
            display: block;
            width: 28px;
            height: 5px;
            background-color: #fff;
            border-radius: 50px;
            transition: all 0.3s;

            &:nth-child(2) {
                margin: 5px 0;
            }
        }

        &__is-active-menu {
            .hamburguer-wrapper__item {
                &:nth-child(1) {
                    transform: rotate(-45deg) translate(-8px, 8px);
                }
                &:nth-child(2) {
                    transform: rotate(-45deg) translate(-1px, 1px);
                }
                &:nth-child(3) {
                    transform: rotate(45deg) translate(-6px, -6px);
                }
            }
        }
        @media (max-width: 650px) {
            display: block;
        }
    }
    .aside-container {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        &.active-menu-aside-backdrop {
            backdrop-filter: blur(10px);
        }

        &__nav {
            margin-left: auto;
            padding: 6rem 1rem 0 1rem;
            overflow: hidden;
            background-color: #2b0b39;
            width: 70%;
            height: 100vh;
            transition: transform 0.3s;
            transform: translateX(100%);
            &__list {
                &__item {
                    margin-bottom: 2rem;

                    &__link {
                        display: block;
                        font-size: 0.9rem;
                        text-decoration: none;
                        padding: 1rem;
                        border-radius: 0.75rem;

                        &.active-aside {
                            background: linear-gradient(
                                to right,
                                #6c208d,
                                #6c208d45
                            );
                        }
                    }
                }
            }
            &.active-menu-aside {
                transform: translateX(0);
            }
        }
    }
    @media (min-width: 651px) {
        display: none;
    }
`
