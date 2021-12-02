import React from 'react';
// Theme Components
import LoginFrm from '../../components/crypto/Forms/Login';
// Theme Wrapper
import Crypto from '../../components/wrapper/Crypto';

function Login() {
  return (
    <Crypto pageName="Login" isFull={false}>
      <LoginFrm />
    </Crypto>
  );
}

Login.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Login;
