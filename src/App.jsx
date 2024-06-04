import Home from './Home'
import {Provider} from 'react-redux'
import store from './redex/store'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from './redex/Checkout'
function App() {
  return (
    // these components can access my store
    <Provider store={store}>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/checkout' element={<Checkout/>} />
       </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App