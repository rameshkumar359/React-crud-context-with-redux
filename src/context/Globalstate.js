import React from 'react';
import { createContext,useReducer } from 'react';
import Appreducer from './Appreducer'

//inittial state 

const initialState = {
    users:[]
}

//create context
export const Globalcontext=createContext(initialState)

//context provider

export const Globalprovider=({children})=>{
    const[state,dispatch] =useReducer(Appreducer,initialState)

    const removeuser=(id)=>{
        dispatch({
            type:"Remove",
            payload:id
        })
    }
    const Adduser=(user)=>{
        dispatch({
            type:"Adduser",
            payload:user
        })
    }

    const Edituser=(user)=>{
        dispatch({
            type:"Edituser",
            payload:user})
        }

    return(
         <Globalcontext.Provider value={{
             users:state.users,
             removeuser,
             Adduser,
             Edituser
         }}>
             {children}
         </Globalcontext.Provider>
    )
}