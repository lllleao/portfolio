import { TagContainer } from './styles'

type Props = {
    children: string
    typeOfProject?: boolean
    isFrontend?: boolean
    isBackend?: boolean
    isFullstack?: boolean
}
const Tag = ({
    children,
    typeOfProject,
    isBackend,
    isFrontend,
    isFullstack
}: Props) => {
    return (
        <TagContainer
            className={`${typeOfProject && 'tag-type-project'} ${isBackend && 'back-end'} ${isFullstack && 'full-stack'} ${isFrontend && 'front-end'}`}
        >
            {children}
        </TagContainer>
    )
}

export default Tag
