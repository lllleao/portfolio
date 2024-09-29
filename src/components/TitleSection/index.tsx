import { TitleContainer } from './styles'

type Props = {
    children: string
    inView: boolean
    isAnimation?: boolean
}

const TitleSection = ({ children, inView, isAnimation }: Props) => {
    if (isAnimation) {
        return (
            <TitleContainer $isAnimation className={inView ? 'is-active' : ''}>
                {children}
            </TitleContainer>
        )
    }

    return (
        <TitleContainer className={inView ? 'is-active' : ''}>
            {children}
        </TitleContainer>
    )
}

export default TitleSection
