import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeWebPage from './Pages/HomeWebPage';
import Flooring from './LinkToAllJobs/Flooring';
import HomeSceurity from './LinkToAllJobs/HomeSecurity';
import HouseKeeping from './LinkToAllJobs/HouseKeeping';
import InteriorDesign from './LinkToAllJobs/InteriorDesign';
import LandScaping from './LinkToAllJobs/Landscaping';
import Mounting from './LinkToAllJobs/Mounting';
import Plumbing from './LinkToAllJobs/Plumbing';
import PoolMaint from './LinkToAllJobs/PoolMaint';
// import Questions from './Questions';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';

function App() {
  return (
   <BrowserRouter>
      <div className="App">
         <NavBar />
         
         <div id="page-body">

            <Routes>
               <Route path="/" element={<HomeWebPage />}/>
               <Route path="/floor" element={<Flooring />}/>
               <Route path="/security" element={<HomeSceurity />}/>
               <Route path="/house" element={<HouseKeeping />}/>
               <Route path="/interior" element={<InteriorDesign />}/>
               <Route path="/land" element={<LandScaping />}/>
               <Route path="/Mounting" element={<Mounting />}/>
               <Route path="/Plumbing" element={<Plumbing />}/>
               <Route path="/Pool" element={<PoolMaint />}/>
            </Routes>
         </div>
      </div>
   </BrowserRouter>
  )
}

export default App;
