import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Myapi from '../shares/Myapi';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { MdWifiPassword } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";




function Myloginpage() {

  const navigat =useNavigate();
  const [login,setlogin]=useState({
      email:"",
      pass:""
  });

  const loginuseer = (e)=>{
      // console.log(e.target.value);
      const {name,value} = e.target;
      setlogin((b)=>{
        return{
          ...b,
          [name]:value
        }
      })
  }

  const userlogin = async()=>{
      const {email,pass}=login;
      if(login.email==="" || login.pass==="")
      {
          alert("Email id and Password is blank!");
      }
      else
      {
          const datares = await fetch( `${Myapi}/login` , {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  email, pass
              })
          });
          const resdata = await datares.json();
          // console.log(resdata);
          if(resdata.status===220)
          {
              alert("User login Successfull");
                navigat('/dashboard');
            
             
          }

          if(resdata.status===620)
          {
              alert("user not found");
          }

          if(resdata.status===421)
              {
                  alert("email and password don't match");
              }
      }

  }


  const [passshow, setpassshow]=useState('password');
const showhide = ()=>{
    if(passshow==="password")
    {
        setpassshow('text');
    }
    else
    {
        setpassshow('password');
    }

}





  return (
    <>
    <div className='wrapper-rr'> 
      
    <div className="container-fluid">
            <form className="mx-auto">
           
                <h4 className="text-center">Login</h4>
                <div className="mb-3 ">
                <label className="form-label tblock"> <MdEmail /> Email address</label>
                  <input type="email" className="form-control" name='email' value={login.email} onInput={loginuseer}  />
                  
                </div>
                <div className="mb-3 position-relative">
                <label className="form-label tblock"> <MdWifiPassword /> Password</label>
                            <input type={passshow} className="form-control cpa" name='pass' value={login.pass} onInput={loginuseer}/>
                            <button type="button" className="btn showhide  text-primary ms-2" onClick={showhide}> {passshow==="password" ? <FaEye/> : <FaEyeSlash/>}</button>
                  
                </div>

              
              
                <button type="button" className="btn btn-primary mt-3" onClick={userlogin}>Login</button>
                <p className='registor-link'>Don't have an account <Link to="registor">Registor</Link> </p>
              </form>
        
        </div>
        
</div>

    </>
  )
}

export default Myloginpage
