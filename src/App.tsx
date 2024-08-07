import { Provider } from 'react-redux'
import NavBar from './components/Aside'
import Main from './containers/Main'
import Global from './globalStyle'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <Global />
            <Main />
            <NavBar />
        </Provider>
    )
}

export default App
