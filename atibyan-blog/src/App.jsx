import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Signin from './pages/Signin'
import Header from './Components/Header'
import Footer from './components/Footer'
import Signup from './pages/Signup'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/dashboard' element={ <Dashboard /> } />
      <Route path='/project' element={ <Project /> } />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/signin' element={ <Signin /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
