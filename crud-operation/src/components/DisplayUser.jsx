import React from 'react';
import { useSelector } from 'react-redux';

const DisplayUser = () => {
    const data = useSelector((state)=>{
       return  state.users;
    })

    console.log("@@@@@@@@@@Data",data)
    return (
        <div>
            {
                data.map((user, id)=>{
                    return <li key={id}>{user}</li>
                })
            }
        </div>
    );
};

export default DisplayUser;