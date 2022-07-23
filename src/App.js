import './App.css';
import './fonts/fonts.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/selecthing" element = {<Main /> }/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
