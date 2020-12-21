import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StepLinks() {  

  return (
    <div className="step-links">
      <NavLink to="/" exact>
        <a>
        PersonalDetails<span />
        </a>
        
      </NavLink>
      
        <NavLink to="/programs">
        <a>
        Programs<span />
        </a>
        
        </NavLink>
    
        <NavLink to="/subscription">
        <a>
        Subscription<span />
        </a>
        
        </NavLink>     
    </div>
  );
}
