import React,{useState,useContext,useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { Globalcontext } from "../context/Globalstate";

export const Edit = (props) => {
  const { users,Edituser} = useContext(Globalcontext);
  const[selecteduser,setSelecteduser]=useState({
    id:"",
    name:""
  })
  const {id}=useParams()
  const currentuserid=id
  console.log(currentuserid)
  const history = useNavigate()
  useEffect(()=>{
    const userId=currentuserid
    const selecteduser=users.find(user=>user.id===userId)
    setSelecteduser(selecteduser)
  },[currentuserid,users])
  const onChange = (e) => {
    setSelecteduser({ ...selecteduser, name: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    Edituser(selecteduser);
    history("/");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <formgroup>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">
                Name
              </span>
            </div> 
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={onChange}
              value={selecteduser.name}
              name="name"
            />
          </div>
        </formgroup>
        <button className="btn btn-primary">Update</button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};
