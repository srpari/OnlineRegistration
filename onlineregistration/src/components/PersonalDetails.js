import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Animator from './Animator';
import { useHistory } from 'react-router-dom';

import { NewRegistrationContext } from './NewRegistrationContext.js';

const PersonalDetails = () => {
    const { register, handleSubmit, errors } = useForm();
    
  const history = useHistory();
    const { personal,setPersonal } =  useContext(NewRegistrationContext);
    
    function onSubmit(data) {
     setPersonal(data);     
     history.push('/programs');
     console.log("i am here  "+JSON.stringify(data) )
    }

    return ( 
        <Animator>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>            
        <input type="text" name="fullname"
         placeholder="Firstname Lastname"         
         defaultValue={personal.fullname}
         ref={register({ required: true })}/>
        <p>{errors.fullname && 'Name is required.'}</p>
        <input type="text" name="mobileno" 
        placeholder="Mobile number"                
        defaultValue={personal.mobileno}
        ref={register({ required: true })}/>
        <p>{errors.mobileno && 'Mobile number is required.'}</p>
        <input type="text" name="email" type="email" 
        placeholder="Email ID"                
        defaultValue={personal.email}
        ref={register({ required: true })}/>
        <p>{errors.email && 'Email is required.'}</p>
        <input type="text" name="age" 
        placeholder="Age"               
        defaultValue={personal.age}
        ref={register({ required: true })}/>
        <p>{errors.age && 'Age is required.'}</p>
        {/* <input type="text" name="city" placeholder="City"/>
        <input type="text" name="country" placeholder="Country"/>     */}
        <input value="Next" type="submit"/>    
        </form>
        </Animator>
     );
}
 
export default PersonalDetails;