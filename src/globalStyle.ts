import { createGlobalStyle } from 'styled-components'

export const colors = {
    white: '#fff',
    purple: '#2b0b39',
    purpleLight: '#9047e5'
}

const Global = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        color: ${colors.white};
        list-style: none;
        font-family: 'Montserrat';
    }

    .container {
        max-width: 1312px;
        width: 90%;
        margin: 0 auto;
    }

    @keyframes sliderFooter {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }

    @keyframes loader {
        0% {
            width: 0;
        } 100% {
            width: 100%;
        }
    }

    @keyframes loaderDeley {
        to {
            opacity: 0;
        }
    }

    @keyframes buttonHeightClose {
        30% {
            color: transparent;
        }
        100% {
            height: 0;
            color: transparent;
        }
    }

    @keyframes buttonHeightOpen {
        30% {
            height: 100%;
        }
        100% {
            height: 100%;

            color: #fff;
        }
    }

    @keyframes shadowImg {
        to {
            filter: drop-shadow(0 0 10px #9047e5);
        }
    }
`

export default Global
