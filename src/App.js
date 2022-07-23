import './App.css';
import './fonts/fonts.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/Signup';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/selecthing" element = {<Main /> }/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/login/signup" element={<Signup/>}/>
        <Route path="/boards/details" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
