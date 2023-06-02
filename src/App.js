import logo from './logo.svg';
import './App.css';
import Navbar from './firstpage/Navbar';
import Cards from './firstpage/Cards';
import Footer from './firstpage/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Painting from './firstpage/Painting';
import Liftandshift from './firstpage/Liftandshift';
import Plumber from './firstpage/Plumber';
import Cleaningservices from './firstpage/Cleaningservices';
import Electrician from './firstpage/Electrician';
import Gardening from './firstpage/Gardening';
import Carpenter from './firstpage/Carpenter';
import Acservice from './firstpage/Acservice';
import Laundry from './firstpage/Laundry';
import Slidingimages from './firstpage/Slidingimages';
import Loggedin from './firstpage/Loggedin';
import Signup from './firstpage/Signup';
import Modules from './modules/Modules';
import MapContainer from './firstpage/google';
import About from './firstpage/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <div>
          <Routes>
         <Route path='/' element={<Slidingimages/>} exact />
          </Routes>
          </div>
          <div>
          <Routes>
         <Route path='/' element={<About/>} exact />
          </Routes>
          </div>
        <Routes>
         <Route path='/' element={<Cards/>} exact/>
         <Route path='/painting' element={<Painting/>} exact/>
         <Route path='/liftandshift' element={<Liftandshift/>} exact/>
         <Route path='/plumber' element={<Plumber/>} exact/>
         <Route path='/cleaningservices' element={<Cleaningservices/>} exact/>
         <Route path='/electrician' element={<Electrician/>} exact/>
         <Route path='/gardening' element={<Gardening/>} exact/>
         <Route path='/carpenter' element={<Carpenter/>} exact/>
         <Route path='/acservices' element={<Acservice/>} exact/>
         <Route path='/laundry' element={<Laundry/>} exact/>
         <Route path='/loggedin' element={<Loggedin/>} exact />
         <Route path='/registration' element={<Signup/>} exact/>
         <Route path='/modules' element={<Modules/>} exact />
         </Routes>
         <div>
          <Routes>
         <Route path='/' element={<Footer/>} exact />
          </Routes>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
