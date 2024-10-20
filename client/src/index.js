import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../src/style.css";
import {Routes, Route,BrowserRouter} from "react-router-dom";
import Myloginpage from './modules/auth/Myloginpage';
import Myregisterpage from './modules/auth/Myregisterpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Mainpage from './modules/dashboard/Mainpage';
import Useredit from './modules/dashboard/Useredit';
import Userdetails from './modules/dashboard/Userdetails';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>
      <Routes>
          <Route path='' element={<Myloginpage/>}></Route>
          <Route path='registor' element={<Myregisterpage/>}></Route>
          <Route path='dashboard' element={<Mylandingpage/>}>
          <Route path='' element={<Mainpage/>}></Route> 
          <Route path='edituser/:id' element={<Useredit/>}></Route> 
          <Route path='details/:id' element={<Userdetails />}></Route>
          </Route>
          
       
          
          

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

