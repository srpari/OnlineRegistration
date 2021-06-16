import React, { useContext }  from 'react';
import { NavLink } from 'react-router-dom';
import { NewRegistrationContext } from './NewRegistrationContext.js';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
export default function StepLinks() {  
  const {personal,programs,subscription} = useContext(NewRegistrationContext);

  const isPersonalDone = !isEmpty(personal);  
  const isProgramsDone = !isEmpty(programs);  
  const isSubscriptionDone = !isEmpty(subscription);

  return (
    <div className="step-links">

       <NavLink to="/" exact>
        {isPersonalDone ? '❤️' : '🤍'} Personal Details <span />
      </NavLink>

      {isPersonalDone ? (
        <NavLink to="/programs">
          {isProgramsDone ? '❤️' : '🤍'} Programs <span />
        </NavLink>
      ) : (
        <a href=" ">
          Programs <span />
        </a>
      )}

      {isPersonalDone && isProgramsDone ? (
        <NavLink to="/subscription">
          {isSubscriptionDone ? '❤️' : '🤍'} Subscription <span />
        </NavLink>
      ) : (
        <a href=" ">
          Subscription <span />
        </a>
      )}


      {isPersonalDone && isProgramsDone && isSubscriptionDone ? (
        <NavLink to="/review" style={{ float: 'right' }}>
        ❤️  Review <span />
        </NavLink>
      ) : (
        <a href=" " style={{ float: 'right' }}>
          Review <span />
        </a>
      )}
 
    </div>
  );
}
