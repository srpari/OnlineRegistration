import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StepLinks from './StepLinks'
import PersonalDetails from './PersonalDetails';
import Programs from './Programs';
import Subscription from './Subscription';

function NewUserRegistration() {
     return (
         <Router>
          <div className="signup-container">
          <StepLinks /> 

          <Switch>
          <Route exact path='/' component={PersonalDetails}></Route> 
          <Route path="/programs" component={Programs} ></Route>
          <Route path="/subscription" component={Subscription} ></Route>
          </Switch>
          </div>
        </Router> 
    )
}

export default NewUserRegistration
