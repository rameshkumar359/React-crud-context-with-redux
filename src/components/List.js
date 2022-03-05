import React from "react";
import { Link } from "react-router-dom";
import { Globalcontext } from "../context/Globalstate";
import {useContext} from 'react'
const List = () => {

   const{users,removeuser}=useContext(Globalcontext)
    console.log(users)
  return (
      <ul className="list-group mt-4">
        {users.length>0?(
          <>
          { users.map((user,index)=>(
                <li key={index} className="list-group-item d-flex">
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <button type="button" onClick={()=>removeuser(user.id)} className="btn btn-danger">
                  Delete
                </button>
                </div>
                </li>
                ))}</>):(
          <h4 className="text-center">No Members</h4>
        )}
          </ul>)
          }

export default List;