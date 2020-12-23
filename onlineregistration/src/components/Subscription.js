import React from 'react';
import { useForm } from 'react-hook-form';
import Animator from './Animator';

function Subscription() {
    const { register, handleSubmit, errors } = useForm();
    
    function onSubmit(data) {
     console.log("i am here  "+JSON.stringify(data) )
    }
    return (
      <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>            
      <div className="subscription-container">          
      <span className="packlabel">Value Pack</span>
        <div className="value-pack">
            <label>
                <input type="checkbox" ref={register} name="kids12class" />
                KIDS Dance Package - 12 classes for 139$     
            </label>
            <label>
                <input type="checkbox" ref={register} name="kids24class" />
                ADULTS Dance Fitness - 24 classes for 105$      
            </label>  
            <label>
               <input type="checkbox" ref={register} name="adults12class" />
               ADULTS Fitness (Private) - 12 classes for 90$       
            </label> 
        </div>                
      <span className="packlabel">Monthly Pack</span>
        <div className="monthly-pack">
            <label>
               <input type="checkbox" ref={register} name="kids4class" />
               KIDS Dance Package - 4 classes for 49$       
            </label>   
            <label>
               <input type="checkbox" ref={register} name="adults8class" />
               ADULTS Dance Fitness - 8 classes for 40$     
            </label> 
            <label>
               <input type="checkbox" ref={register} name="adults10class" />
               ADULTS Fitness (Private) - 10 classes for 120$       
            </label>  
        </div>
      </div>
      <input value="Submit" type="submit"/>    
      </form>
      </Animator>
    )
}

export default Subscription
