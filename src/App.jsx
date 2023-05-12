
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ItemPage from './Pages/ItemPage'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/item-page' element={ <ItemPage />} />
      </Routes>
    </div>
  )
}

export default App
