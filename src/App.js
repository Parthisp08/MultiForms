import './App.css';

import Navbar from './Navbar/Navbar'
import PersonalInfo from './personalInfo/PersonalInfo'
import Plans from './selectPlans/Plans';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Navbar />
       <PersonalInfo />
       <Routes>
         <Route exact path='/info' element={<PersonalInfo/>}/>
         <Route exact path='/plans' element={<Plans/>}/>


       </Routes>
       </BrowserRouter>
      
      
    </div>
  );
}

export default App;
