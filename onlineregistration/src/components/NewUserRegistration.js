import React from 'react'
// import StepLinks from './StepLinks'
import { useForm } from 'react-hook-form';

function NewUserRegistration() {
    const { handleSubmit, errors, register } =useForm();
    
    function onSubmit(data) {
      alert("hi");
      }
    return (
       <div className="signup-container">
          {/* <h3>Please enter your details</h3>   */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>            
        <input type="text" name="fullname" placeholder="Firstname Lastname"
         ref={register({ required: true })}/>
        <p>{errors.name && 'Name is required.'}</p>
        <input type="text" name="mobileno" placeholder="Mobile number"/>
        <input type="text" name="email" type="email" placeholder="Email ID"/>
        <input type="text" name="age" placeholder="Age"/>
        {/* <input type="text" name="city" placeholder="City"/>
        <input type="text" name="country" placeholder="Country"/>     */}
        <input value="Next" type="submit"/>    
        </form>
       </div>
    )
}

export default NewUserRegistration
