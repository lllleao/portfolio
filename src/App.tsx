import { Provider } from 'react-redux'
import NavBar from './components/Aside'
import Main from './containers/Main'
import Global from './globalStyle'
import store from './store'
import Footer from './components/Footer'

function App() {
    return (
        <Provider store={store}>
            <Global />
            <Main />
            <NavBar />
            <Footer />
        </Provider>
    )
}

export default App
