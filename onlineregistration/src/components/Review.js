import React, { useContext } from 'react';
import { NewRegistrationContext } from './NewRegistrationContext.js';
import Animator from './Animator';

export default function Review() {
  const { personal,programs,subscription } =  useContext(NewRegistrationContext);
 
  function handleSubmit(e) {
    e.preventDefault();
    alert('you are submitting! congrats!');
  }

  return (
    <Animator>
      <form onSubmit={handleSubmit}>
        <h2>Review all your info</h2>
        <p>
          <strong>Name</strong>: {personal.fullname}
        </p>
        <p>
          <strong>Mobile No</strong>: {personal.mobileno}
        </p>
        <p>
          <strong>Email-ID</strong>: {personal.email}
        </p>
        <p>
          <strong>Age</strong>: {personal.age}
        </p>
        <p>
          <strong>Program</strong>: {programs}
        </p>
        <p>
          <strong>Subscription</strong>: {subscription}
        </p>
        <input type="submit" value="Submit" />
      </form>
    </Animator>
  );
}
