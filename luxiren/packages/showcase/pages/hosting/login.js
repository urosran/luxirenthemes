import React from 'react';
// Theme Components
import LoginFrm from '../../components/hosting/Forms/Login';
// Theme Wrapper
import Hosting from '../../components/wrapper/Hosting';

function Login() {
  return (
    <Hosting pageName="Login" isFull={false}>
      <LoginFrm />
    </Hosting>
  );
}

Login.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Login;
