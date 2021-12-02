import React from 'react';
import LoginForm from '../../components/education/Forms/Login';
// Theme Wrapper
import Education from '../../components/wrapper/Education';

function Login() {
  return (
    <Education pageName="Login" isFull={false}>
      <LoginForm />
    </Education>
  );
}

export default Login;
