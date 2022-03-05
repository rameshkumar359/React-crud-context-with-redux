import React,{useContext,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { Globalcontext } from "../context/Globalstate";
import {v4 as uuid} from 'uuid';

export const Adduser = () => {
    const[name,setName]=useState("")
  const { Adduser} = useContext(Globalcontext);
  const history = useNavigate()
  const onSubmit = (e) => {
      e.preventDefault();
      const newuser={
          id:uuid(),
          name:name
      }
      Adduser(newuser)
    history("/");
  };

  const onChange=(e)=>{
      setName(e.target.value)
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
              name="name"
              value={name}
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={onChange}
            />
          </div>
        </formgroup>
        <button className="btn btn-primary">submit</button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};