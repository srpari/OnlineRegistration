import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Animator from './Animator';

import { NewRegistrationContext } from './NewRegistrationContext.js';

const PersonalDetails = () => {
    const { register, handleSubmit, errors } = useForm();
    const { personal,setPersonal } =  useContext(NewRegistrationContext);
    
    function onSubmit(data) {
      setPersonal(data);
     console.log("i am here  "+JSON.stringify(data) )
    }

    return ( 
          <Animator>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>            
        <input type="text" name="fullname"
         placeholder="Firstname Lastname"
        //  defaultValue={personal.fullName}
         ref={register({ required: true })}/>
        <p>{errors.fullname && 'Name is required.'}</p>
        <input type="text" name="mobileno" placeholder="Mobile number" 
        ref={register({ required: true })}/>
        <p>{errors.mobileno && 'Mobile number is required.'}</p>
        <input type="text" name="email" type="email" placeholder="Email ID" 
        ref={register({ required: true })}/>
        <p>{errors.email && 'Email is required.'}</p>
        <input type="text" name="age" placeholder="Age"
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