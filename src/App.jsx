import './App.css'
import Surah from './Pages/Surah'
import Ayat from './Pages/Ayat'
import Juz from './Pages/Juz'
import Quran from './Pages/Quran'
import Home from './Pages/Home'
import Header from './Components/Header'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Forgot from './Pages/Forgot'
import Profile from './Pages/Profile'
import Private from './Components/PrivateRoute'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
     <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/surah' element={<Surah/>}/>
      <Route path='/juz' element={<Juz/>}/>
      <Route path='/ayah' element={<Ayat/>}/>
      <Route path='/quran' element={<Quran/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/resetpassword' element={<Forgot/>}/>
      
      <Route path='/profile' element={<Private/>}>
      <Route path='/profile' element={<Profile/>}/>
      </Route>
      </Routes>
      </Router>

      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  )
}

export default App
