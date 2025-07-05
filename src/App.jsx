import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'


function App() {
  return (
    <Router>
      <div className='w-full  text-gray-800 font-[Lexend]'>
       <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </div>  
    </Router>
  )
}

export default App
