import React from 'react';
// Theme Components
import LoginFrm from '../../components/saas/Forms/Login';
// Theme Wrapper
import Saas from '../../components/wrapper/Saas';

function Login() {
  return (
    <Saas pageName="Login" isFull={false}>
      <LoginFrm />
    </Saas>
  );
}

Login.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Login;
