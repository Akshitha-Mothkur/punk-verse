
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewBeerDetails from './components/ViewBeerDetails'
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/viewdetails/:id' Component={ViewBeerDetails}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
