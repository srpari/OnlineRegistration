import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import Animator from './Animator';


import { NewRegistrationContext } from './NewRegistrationContext';

function Programs() {
  const { personal } = useContext(NewRegistrationContext);
    const { register, handleSubmit, errors } = useForm();
    
    function onSubmit(data) {
     console.log("i am here inprogramss  "+JSON.stringify(data) )
    }
    return (
      <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {personal.name}
      <div className="programs-container">   
      <label>
      <input type="checkbox" ref={register} name="kidsbeginner" />
      KIDS DANCE - Beginner         
      </label>
      <label>
        <input type="checkbox" ref={register} name="kidsintermediate" />
        KIDS DANCE - Intermediate           
      </label>
      <label>
        <input type="checkbox" ref={register} name="adultsbeginner" />
        ADULTS DANCE - Beginner
      </label>
      <label>
         <input type="checkbox" ref={register} name="adultsdancefit" />
         ADULTS DANCE FITNESS           
      </label>
      <label>
          <input type="checkbox" ref={register} name="adultsdanceprivate" />
          ADULT DANCE FITNESS (Private)
      </label>
      <input value="Next" type="submit"/> 
      </div>  
      </form>
      </Animator>
    )
}

export default Programs
