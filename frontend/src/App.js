import './App.css';
import { Routes, Route } from "react-router-dom";
import SignIn from './scenes/signin';
import Signup from './scenes/signup';
import ForgotPassword from './scenes/forgotpassword';
import Homepage from './scenes/homepage';
import Navbar from './scenes/navbar';
import Sandbox from './scenes/sandbox';
function App() {
  return (
    <>
            <Navbar/>

      <Routes>
      <Route path="/" element={<Homepage/>} />

          <Route path="/login" element={<SignIn/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/sandbox" element={<Sandbox/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />

      </Routes>
    </>
  );
}

export default App;
