
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewBeerDetails from './components/ViewBeerDetails'
import Randombeer from './components/Randombeer'
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/viewdetails/:id' Component={ViewBeerDetails}/>
        <Route path='/randomb' Component={Randombeer}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
