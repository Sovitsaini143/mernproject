import React, {useState, useEffect} from  'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Myapi from '../shares/Myapi';

function Useredit() {

    const mynavigt = useNavigate();
    const {id} = useParams();
    const [user,setuser]=useState({
        email:"",
        fullname:"",
        address:"",
        dob:"",
        phone:"",
        pass:""
    });

    const  updateuseer = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setuser((b)=>{
          return{
            ...b,
            [name]:value
          }
        })
    }


    
    const edituser = ()=>{
        axios.get(`${Myapi}/singleuser/${id}`).then((y)=>{
            // console.log(y);
           setuser(y.data);
         });
        }
useEffect(()=>{
    edituser();
},[]);


const changedetails = async()=>{
    const { email,fullname,phone,address,dob,pass} = user;
    const res = await fetch(`${Myapi}/updateuser/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,fullname,phone,address,dob,pass
        })
        
    });
    const data = await res.json();
    console.log(data);
    alert("update record successfully");
    mynavigt("/dashboard");
    
}




  return (
    <div className='wrapper-rr' >   
    <div className='row justify-content-center'>
        <div className='container-form '>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div className="mb-3">
                          <p className='heading'> Edit User</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' value={user.email} onInput={updateuseer} />
                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">FullName</label>
                            <input type="text" className="form-control" name='fullname' value={user.fullname} onInput={updateuseer} />
                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input type="text" className="form-control" name='phone' value={user.phone} onInput={updateuseer} />
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">DOB</label>
                            <input type="date" className="form-control" name='dob' value={user.dob} onInput={updateuseer} />
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <select className='form-select' name='address' value={user.address} onChange={updateuseer}>
                            <option>MP</option>
                            <option>UP</option>
                            <option>UK</option>
                            <option>HP</option>
                            
                           </select>
                          
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name='pass' value={user.pass} onInput={updateuseer} />
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div className="mb-3">
                        <button type="button" className="bbbt" onClick={changedetails}>Changes</button>
                <button type="submit" className="bbbt"  ><Link to="/">Login</Link></button>

                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    </div>
  )
}

export default Useredit
