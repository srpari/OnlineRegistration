import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Animator from './Animator';
import { useHistory } from 'react-router-dom';
import { NewRegistrationContext } from './NewRegistrationContext.js';


function Subscription() {
    const { register, handleSubmit, errors, watch } = useForm();
    const { programs } =  useContext(NewRegistrationContext);
    const { setSubscription } =  useContext(NewRegistrationContext);
    const history = useHistory();
    const watchAllFields = watch(); 
    function onSubmit(data) {     
      setSubscription(watchAllFields.subpackage)
      history.push('/review');
    }
    return (
      <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>            
      <div className="subscription-container">          
          <div className="monthly-pack">
           {programs=="Kids" && (
           <>
           <label>
               <input type="radio" ref={register} value="KIDS Dance Package - 4 classes for 49$" name="subpackage" />
               KIDS Dance Package - 4 classes for 49$       
            </label> 
            <label>
                <input type="radio" ref={register} value="KIDS Dance Package - 12 classes for 139$" name="subpackage" />
                KIDS Dance Package - 12 classes for 139$     
            </label> </>
            )}
           {programs!="Kids" && (
           <> 
            <label>
               <input type="radio" ref={register} value="ADULTS Dance Fitness - 8 classes for 99$" name="subpackage" />
               ADULTS Dance Fitness - 8 classes for 99$     
            </label> 
            <label>
                <input type="radio" ref={register} value="ADULTS Dance Fitness - 12 classes for 129$" name="subpackage" />
                ADULTS Dance Fitness - 12 classes for 129$      
            </label>
            <label>
               <input type="radio" ref={register} value="ADULTS Fitness (Private) - 10 classes for 149$" name="subpackage" />
               ADULTS Fitness (Private) - 10 classes for 149$       
            </label> </>
            )}
        </div>
      </div>
      <input value="Submit" type="submit"/>    
      </form>
      </Animator>
    )
}

export default Subscription
