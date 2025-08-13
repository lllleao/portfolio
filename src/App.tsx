import { Provider } from 'react-redux'
import Main from './containers/Main'
import Global from './globalStyle'
import store from './store'
import Footer from '@components/Footer'
import Background from '@components/Background'
import Header from './containers/Header'

function App() {
    return (
        <Provider store={store}>
            <Global />
            <Background />
            <Header />
            <Main />
            <Footer />
        </Provider>
    )
}

export default App
