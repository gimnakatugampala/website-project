import './App.css';

import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import SignUp from './components/SignUp/SignUp';
import MainLogin from './components/LogIn/MainLogin';
import SecondLogin from './components/LogIn/SecondLogin/SecondLogin';
import ThirdLogin from './components/LogIn/ThirdLogin/ThirdLogin';
import UpdatePassword from './components/UpdatePassword/UpdatePassword';

function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
        <Route path="/" element={<Welcome />} />
        </Routes>
      </Router> */}
     {/* <Welcome /> */}
     {/* <SignUp /> */}
     <MainLogin />
     {/* <SecondLogin /> */}
     {/* <ThirdLogin /> */}
    </div>
  );
}

export default App;
