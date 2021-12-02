import React from 'react';
import RegisterForm from '../../components/movie/Forms/Register';
// Theme Wrapper
import Movie from '../../components/wrapper/Movie';

function Register() {
  return (
    <Movie pageName="Register" isFull={false}>
      <div>
        <RegisterForm />
      </div>
    </Movie>
  );
}

export default Register;
