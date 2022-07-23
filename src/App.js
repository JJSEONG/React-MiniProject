import './App.css';
import './fonts/fonts.css'
import { Routes, Route } from 'react-router-dom'

import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="selecthing" element = {<Main /> }/>
      </Routes>
    </div>
  );
}

export default App;
