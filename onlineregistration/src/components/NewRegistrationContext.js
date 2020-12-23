import React from 'react';
import  { createContext,useState } from 'react';

export const NewRegistrationContext = createContext();

const NewRegistrationProvider=(props)=> {
    const [personal,setPersonal] = useState();    
    return (
       <NewRegistrationContext.Provider 
       value={{personal,setPersonal}} >
           {props.children}
       </NewRegistrationContext.Provider>
    )
}
export default NewRegistrationProvider;
