import { TagContainer } from './styles'

type Props = {
    children: string
    backcolor: string
    color?: string
}
const Tag = ({ children, backcolor, color }: Props) => {
    return (
        <TagContainer $color={color} $backcolor={backcolor}>
            {children}
        </TagContainer>
    )
}

export default Tag
