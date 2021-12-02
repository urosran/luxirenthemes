import React from 'react';
import RegisterForm from '../../components/education/Forms/Register';
// Theme Wrapper
import Education from '../../components/wrapper/Education';

function Register() {
  return (
    <Education pageName="Register" isFull={false}>
      <RegisterForm />
    </Education>
  );
}

export default Register;
