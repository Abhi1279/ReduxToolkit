import React from 'react';
import DeleteAllUsers from './DeleteAllUsers';
import { fakeUserData } from '../api';
import {useDispatch} from 'react-redux';
import { addUsers } from '../store/slices/UserSlice';
import DisplayUser from './DisplayUser';


const UserDetails = () => {

  const dispatch = useDispatch()
  const handleUser = (name) => {
    // e.preventDefault();
    // fakeUserData()
    dispatch(addUsers(name))
  }
    return (
        <>
          <div>
            <button className='btn btn-info' onClick={(e)=>handleUser(fakeUserData())}>Add New Users</button>
          </div>  
          <div>
          <ul>
         <DisplayUser/>
          </ul>
          </div>
          <hr/>
          <DeleteAllUsers/>
        </>
    );
};

export default UserDetails;