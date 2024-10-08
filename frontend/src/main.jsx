import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './store';
// import { Provider } from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen.jsx';
import Registerscreen from './Screens/RegisterScreen.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import ProfileScreen from './Screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
// import ProfileScreen from './screens/ProfileScreen.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen/>} />
      <Route path='/register' element={<Registerscreen />} />
      <Route path='/' element={<PrivateRoute />} >
      <Route path='/profile' element={<ProfileScreen />} />
      </Route>
      {/* <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
      </Route> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
     <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
    </React.StrictMode>
 
);