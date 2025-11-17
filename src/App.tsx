import './styles/App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createuser' element={<CreateUser/>}/>
      </Routes>
    </>
  )
}

export default App
