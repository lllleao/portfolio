import MenuDeskTop from '@components/MenuDeskTop'
import { HeaderContainer } from './styles'
import MenuMob from '@components/MenuMob'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '@store/index'
import { useEffect, useRef } from 'react'
import { updateHeightHeader } from '@store/reducers/intersection'

const Header = () => {
    const { backdropMenu } = useSelector((state: RootReducer) => state.intersection)
    const { heightHeader } = useSelector((state: RootReducer) => state.intersection)
    const header = useRef<HTMLHeadingElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!header.current) return
        // console.log(header.current.clientHeight)
        dispatch(updateHeightHeader(header.current.clientHeight))
    }, [])

    return (
        <HeaderContainer ref={header} className={backdropMenu ? 'active-backdrop-header' : ''}>
            <MenuDeskTop />
            <MenuMob />
        </HeaderContainer>
    )
}

export default Header
