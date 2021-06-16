import React from 'react'
import { Switch, Route,useLocation } from 'react-router-dom';
import StepLinks from './StepLinks'
import PersonalDetails from './PersonalDetails';
import Programs from './Programs';
import Subscription from './Subscription';
import Review from './Review';

import NewRegistrationProvider from './NewRegistrationContext'

function NewUserRegistration() {
    
  const location = useLocation();
     return (
         <NewRegistrationProvider>
          <div className="signup-container">
          <StepLinks /> 

          <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={PersonalDetails}></Route> 
          <Route path="/programs" component={Programs} ></Route>
          <Route path="/subscription" component={Subscription} ></Route>
          <Route path="/review" component={Review} ></Route>
          </Switch>
          </div>  
                 
          </NewRegistrationProvider>
    )
}

export default NewUserRegistration
