import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import Animator from './Animator';
import { useHistory } from 'react-router-dom';
import { NewRegistrationContext } from './NewRegistrationContext';

function Programs() {
  // const { personal } = useContext(NewRegistrationContext);
  const { setPrograms } =  useContext(NewRegistrationContext);
  
  const history = useHistory();
    const { register, handleSubmit, errors, watch } = useForm();
    const watchAllFields = watch(); 

    function onSubmit(data) {
      // setPrograms(data);      
      history.push('/subscription');
      // console.log("i am here in programss  "+JSON.stringify(data));
      setPrograms(watchAllFields.program)
    }

    return (
      <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="programs-container">
      <div className="programsdiv">  
      <label>
      <input type="radio" ref={register} value="Kids" name="program" />
      KIDS DANCE - Beginner        
      </label>
      <label>
        <input type="radio" ref={register} value="Kids" name="program" />
        KIDS DANCE - Intermediate      
      </label>
      <label>
         <input type="radio" ref={register} value="Adults" name="program" />
         ADULTS DANCE FITNESS           
      </label>    
      </div>    
      </div>     
      <input value="Next" type="submit"/> 
      </form>
      </Animator>
    )
}

export default Programs
