import React from 'react';
import LoginForm from '../../components/movie/Forms/Login';
// Theme Wrapper
import Movie from '../../components/wrapper/Movie';

function Login() {
  return (
    <Movie pageName="Login" isFull={false}>
      <div>
        <LoginForm />
      </div>
    </Movie>
  );
}

export default Login;
