import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 2rem 0;
    position: fixed;
    z-index: 2;
    width: 100%;
    &.active-backdrop-header {
        backdrop-filter: blur(10px);
    }
    @media screen and (min-width: 651px) {
        backdrop-filter: blur(10px);
    }
`
