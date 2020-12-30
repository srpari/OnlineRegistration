import React from 'react';
import  { createContext,useState } from 'react';

export const NewRegistrationContext = createContext();

const NewRegistrationProvider=(props)=> {
    const [personal,setPersonal] = useState({});    
    const [programs,setPrograms] = useState({});     
    const [subscription,setSubscription] = useState({});    
    return (
       <NewRegistrationContext.Provider 
       value={{personal,setPersonal,
        programs,setPrograms,
        subscription,setSubscription
        }} >
           {props.children}
       </NewRegistrationContext.Provider>
    )
}
export default NewRegistrationProvider;
