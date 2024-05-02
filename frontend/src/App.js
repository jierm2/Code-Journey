import './App.css';
import { Routes, Route } from "react-router-dom";
import SignIn from './scenes/signin';
import Signup from './scenes/signup';
import ForgotPassword from './scenes/forgotpassword';
import Homepage from './scenes/homepage';
import Navbar from './scenes/navbar';
import Sandbox from './scenes/sandbox';
import MapPage from './scenes/map/map';
import HelloWorld from './scenes/hello-world';
import Layout from './hocs/Layout';
import { Provider } from 'react-redux';
import store from './store';
import Personal from './scenes/personal/personal';

//To-do
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
function App() {
  return (
    <Provider store={store}>
            <Layout>

      <Routes>
      <Route path="/" element={<Homepage/>} />
          <Route path="/map" element={<MapPage/>} />
          <Route path="/login" element={<PublicRoute><SignIn/></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup/></PublicRoute>} />
          <Route path="/sandbox" element={<Sandbox/>} />
          <Route path="/forgot-password" element={<PublicRoute><ForgotPassword/></PublicRoute>} />
          <Route path="/hello-world" element={<HelloWorld/>} />
          <Route path="/personal" element={<Personal/>} />


      </Routes>
      </Layout>

      </Provider>  

      );
}

export default App;
