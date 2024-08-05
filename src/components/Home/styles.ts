import { styled } from 'styled-components'

export const HeroContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2b0b39;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='334' height='334' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23550055' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23690675'%3E%3Ccircle cx='769' cy='229' r='7'/%3E%3Ccircle cx='539' cy='269' r='7'/%3E%3Ccircle cx='603' cy='493' r='7'/%3E%3Ccircle cx='731' cy='737' r='7'/%3E%3Ccircle cx='520' cy='660' r='7'/%3E%3Ccircle cx='309' cy='538' r='7'/%3E%3Ccircle cx='295' cy='764' r='7'/%3E%3Ccircle cx='40' cy='599' r='7'/%3E%3Ccircle cx='102' cy='382' r='7'/%3E%3Ccircle cx='127' cy='80' r='7'/%3E%3Ccircle cx='370' cy='105' r='7'/%3E%3Ccircle cx='578' cy='42' r='7'/%3E%3Ccircle cx='237' cy='261' r='7'/%3E%3Ccircle cx='390' cy='382' r='7'/%3E%3C/g%3E%3C/svg%3E");
    @media (max-height: 459px) and (min-width: 768px) {
        height: 100%;
    }
`
export const Hero = styled.div`
    display: flex;
    height: 100%;
    gap: 122px;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 32px;
    }

    /* @media (max-height: 703px) and (min-width: 768px) {
        height: max-content;
    } */
`
export const Profile = styled.div`
    padding: 16px;
    width: 100%;
    img {
        width: 100%;
    }
    @media (max-height: 703px) and (min-width: 768px) {
        /* height: 95vh; */
        width: 100vh;
        img {
            display: block;
            margin: 0 auto;
            width: auto;
            height: 60vh;
        }
    }
`
export const ProfileNav = styled.nav`
    margin-top: 32px;
    ul {
        display: grid;
        column-gap: 32px;
        grid-template-areas:
            'instagram github'
            'curriculo curriculo';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        row-gap: 2rem;
        font-weight: bold;
        text-align: center;

        .borderAnime {
            position: relative;
            padding: 0.5rem;
            cursor: pointer;
            border: 2px solid #fff;

            &::before {
                position: absolute;
                content: '';
                top: -2px;
                left: 6px;
                background-color: #2b0b39;
                width: calc(100% - 12px);
                height: calc(100% + 4px);
                transform: scaleY(1);
            }

            &::after {
                position: absolute;
                content: '';
                top: 6px;
                left: -2px;
                background-color: #2b0b39;
                width: calc(100% + 4px);
                height: calc(100% - 12px);
                transform: scaleY(1);
            }

            span {
                position: relative;
                display: block;
                z-index: 2;
            }
        }

        .curriculo {
            padding: 1vh;
            background-color: #9047e5;
            font-size: clamp(1rem, 3vh, 1.2rem);
            cursor: pointer;
            border-radius: 8px;

            i {
                font-size: clamp(16px, 3vh, 22px);
                margin-right: 12px;
            }
        }
    }

    .instagram {
        grid-area: instagram;
    }
    .github {
        grid-area: github;
    }
    .curriculo {
        grid-area: curriculo;
    }
`

export const Message = styled.div`
    /* width: 190vh; */
    h1 {
        font-size: clamp(1rem, 3vw, 3rem);
        font-family: 'Philosopher';
        letter-spacing: 0.5rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 1rem;
        text-shadow: 8px 8px 12px #000;
    }

    p {
        font-size: 1.3rem;
        font-size: clamp(1rem, 2vw, 1.3rem);
        line-height: 3rem;
        text-align: justify;
        text-shadow: 8px 8px 12px #000;
        /* text-transform: uppercase; */
    }
`
