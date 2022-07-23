import './App.css';
import './fonts/fonts.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/Signup';
<<<<<<< HEAD
import AddPost from './components/AddPost';
=======
import Detail from './components/Detail';
>>>>>>> 5ecd0220e1ae7211e59341e68caad70d259083f0

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element = {<Main /> } />
        <Route path="/login" element ={<Login />} />
        <Route path="/login/signup" element={<Signup />} />
        <Route path="/newBoards" element = {<AddPost />} />
=======
        <Route path="/selecthing" element = {<Main /> }/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/login/signup" element={<Signup/>}/>
        <Route path="/boards/details" element={<Detail/>}/>
>>>>>>> 5ecd0220e1ae7211e59341e68caad70d259083f0
      </Routes>
    </div>
  );
}

export default App;
