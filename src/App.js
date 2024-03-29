import {Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import UserLogin from './components/UserLogin';
import AdminPortal from './components/AdminPortal';
import Signup from './components/Signup';
import Authentication from './authentication/Authentication';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup' element={<Authentication Component={< Signup />} />}/>

          <Route path='/login' element={<Authentication Component={< UserLogin />} />}/>

          <Route path='/admin' element={<Authentication Component={<AdminPortal/>}/>}/>

        </Routes>
    </>
  );
}

export default App;
