import styled from 'styled-components'

type Props = {
    $backcolor: string
    $color?: string
}

export const TagContainer = styled.li<Props>`
    padding: 0.2rem 1rem;
    border-radius: 0.2rem;
    background-color: ${({ $backcolor }) => $backcolor};
    color: ${({ $color }) => ($color ? $color : '#ff')};
`
