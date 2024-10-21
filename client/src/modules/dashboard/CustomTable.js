import React, { useState,useEffect, Fragment } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Myapi from "../shares/Myapi";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';




function CustomTable() {
    const [user, setuser] = useState([])
    const getalldata = () => {
        axios.get(`${Myapi}/alldata`)
        .then((y) => {
            // console.log(y.data);
            setuser(y.data);
        });
    }

    useEffect(()=>{
        getalldata();
    }, [])

 
    const deletedata = async(id)=>
        {
            await axios.delete(`${Myapi}/deleterecord/${id}`)
            .then((y)=>{
                console.log(y);
                getalldata();
            })
        }


    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col mt-3'>
                        <div className="card mb-3 shadow bg-warning text-white">
                            <div className="card-body">
                                <span className="card-title h4">Total Students: {user.length}</span>
                                <span className='h3 c-float'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">MongodbId</th>
      <th scope="col">FullName</th>
      <th scope="col">Email Id</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Address</th>
      <th scope="col">DOB</th>
      <th scope="col" className="text-end">Actions</th>
    </tr>
  </thead>
  <tbody>
                {user.map((y) => {
                    return (
                        <tr>
                            <th scope="row">{y._id}</th>
                            <td>{y.fullname}</td>
                            <td>{y.email}</td>
                            <td>{y.phone}</td>
                            <td>{y.address}</td>
                            <td>{y.dob}</td>
                            
                            <td className='text-end'>
                                
                                <Link to={`edituser/`+y._id} className="badge text-bg-primary"> < EditIcon />  </Link>
                                <button  className="btn badge text-bg-danger" onClick={()=>deletedata(y._id)}> <DeleteIcon />   </button>
                                <Link to={'details/'+y._id} className="badge text-bg-info" > < VisibilityIcon/> </Link>
                            </td>
                        </tr>
                    )
                })}
  </tbody>
</table>
        </Fragment>
    )
}

export default CustomTable