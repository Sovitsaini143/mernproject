import React,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUser,FaPhoneAlt,FaHome } from "react-icons/fa";
import { MdDateRange,MdWifiPassword } from "react-icons/md";





function Myregisterpage() {
 const navigat = useNavigate();

 const [user,setuser]=useState({
       
    email:"",
    fullname:"",
    phone:"",
    dob:"",
    address:"",
    pass:""
 });

 const updateuseer = (e)=>{
    console.log(e.target.value);
    const {name, value} =e.target;
    setuser((b)=>{
        return{
            ...b,
            [name]:value
        }
    })
 }

 const mysubmitdata = async()=>{
    const { email,fullname, phone,address, dob,pass } = user;
    if (user.email === '' || user.fullname === "" || user.pass === "") {
        alert("Please! fills inputs correctly ");
    }
    else
     {
        const res = await fetch("http://localhost:7000/registoruser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,fullname,address,pass,phone,dob
            })
        });
        const data = await res.json();
        console.log(data);
        alert("Register is successfull");
        navigat("/");

      
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
    
    <div className='wrapper-rr'> 
    <forms>
    <div className='container'>
    <div className='row justify-content-center '>
        <div className='col-md-8 p-4  container-form'>
            <div className='container-fluid'>
                <div className='row'>
                
                <div className='col-12 text-center'>
                        <div className="mb-3">
                          <p className='h2 '> Register Page </p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label tblock"> <  MdEmail/>Email address</label>
                            <input type="email" className="form-control" name='email' value={user.email} onInput={updateuseer}/>
                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label tblock"> <FaUser /> FullName</label>
                            <input type="text" className="form-control" name='fullname' value={user.fullname} onInput={updateuseer}/>
                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label tblock"> < FaPhoneAlt /> Phone No</label>
                            <input type="text" className="form-control" name='phone' value={user.phone} onInput={updateuseer}/>
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label tblock"> <MdDateRange /> DOB</label>
                            <input type="date" className="form-control" name='dob' value={user.dob} onInput={updateuseer}/>
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label tblock"> < FaHome /> Address</label>
                           <select className='form-select' name='address' value={user.address} onChange={updateuseer}>
                            <option>UK</option>
                            <option>MP</option>
                            <option>UP</option>
                            <option>HR</option>
                           </select>
                          
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3 pass-box">
                            <label className="form-label tblock"> < MdWifiPassword /> Password</label>
                            <input type={passshow} className="form-control cpa" name='pass' value={user.pass} onInput={updateuseer}/>
                            <button type="button" className="btn showhide  text-primary ms-2" onClick={showhide}> {passshow==="password" ? <FaEye/> : <FaEyeSlash/>}</button>
                           
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div className="mb-3">
                           <button type="button" className='bbbt btn btn-primary' onClick={mysubmitdata}>Registor Now</button>
                           <button type="submit" className='bbbt btn btn-primary'><Link to="/" >Login </Link></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</forms>
</div>
      
    
  )
}

export default Myregisterpage
