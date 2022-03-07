import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import BilingualOverview from './components/BilingualOverview';
import PreschoolKinder from './components/PreschoolKinder';
import Elementary from './components/Elementary';
import Admissions from './components/Admissions';
import Calendar from './components/Calendar';
import Staff from './components/Staff';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="overview" element={ <BilingualOverview/> } />
        <Route path="preschool-kinder" element={ <PreschoolKinder/> } />
        <Route path="elementary" element={ <Elementary/> } />
        <Route path="admissions" element={ <Admissions/> } />
        <Route path="calendar" element={ <Calendar/> } />
        <Route path="staff" element={ <Staff/> } />
      </Routes>
    </div>
  );
}

export default App;
