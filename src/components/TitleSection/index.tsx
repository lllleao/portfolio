import { TitleContainer } from './styles'

type Props = {
    children: string
}

const TitleSection = ({ children }: Props) => {
    return (
        <TitleContainer >
            {children}
        </TitleContainer>
    )
}

export default TitleSection
