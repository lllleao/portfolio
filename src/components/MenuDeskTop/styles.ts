import styled from 'styled-components'

export const MenuDeskTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    .header-container__link {
        text-decoration: none;
        &__title {
            font-size: 1.5rem;
            font-style: italic;
        }
    }

    .header-container__nav {
        display: flex;
        gap: 2rem;
        &__item {
            position: relative;
            padding-bottom: 1rem;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 4px;
                background-color: #ff1087;
                color: #fff;
                transition: width 0.3s;
            }
            &__link {
                font-weight: bold;
                padding: 0.5rem 1rem;
                text-decoration: none;
                transition: color 0.3s;
            }

            &.active {
                &::after {
                    width: 100%;
                }
                .active__link {
                    color: #ff1087;
                }
            }
        }
        @media screen and (max-width: 650px) {
            display: none;
        }
    }
`
