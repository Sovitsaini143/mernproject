import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Myapi from '../shares/Myapi';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Userdetails() {

  const {id} = useParams();

  const [userdetail,userset]=useState({})

const singleuser= ()=>{
  axios.get(`${Myapi}/singleuser/${id}`).then((y)=>{
      // console.log(y);
      userset(y.data);
  })

}

useEffect(()=>{
  singleuser();
},[]);



  return (
    
<div style={{ marginTop: "150px" }}>
  <div className='cards'>
    <div className="cards-header">
      <p>User Details Page</p>
    </div>
    <div className="containers">
      <strong>ID: </strong>
      <span>{id}</span>
      <br/>  
      <br/>  
      <strong>Name:</strong>
      <span>{userdetail && userdetail.fullname}</span>
      <br/>  
      <br/>  
      <strong>Email:</strong>
      <span>{userdetail && userdetail.email}</span>
      <br/>  
      <br/> 
      <strong>Phone:</strong>
      <span>{userdetail && userdetail.phone}</span>
      <br/> 
      <br/> 

      <Link to="/dashboard">
      <button type="button" class="btn btn-success" >GO BACK</button>
        </Link>


    </div>
  </div>

</div>
  )
}

export default Userdetails
