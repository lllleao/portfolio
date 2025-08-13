import MenuDeskTop from '@components/MenuDeskTop'
import { HeaderContainer } from './styles'
import MenuMob from '@components/MenuMob'
import { useSelector } from 'react-redux'
import { RootReducer } from '@store/index'

const Header = () => {
    const { backdropMenu } = useSelector((state: RootReducer) => state.intersection)
    return (
        <HeaderContainer className={backdropMenu ? 'active-backdrop-header' : ''}>
            <MenuDeskTop />
            <MenuMob />
        </HeaderContainer>
    )
}

export default Header
