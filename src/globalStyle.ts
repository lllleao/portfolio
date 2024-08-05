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
`

export default Global
