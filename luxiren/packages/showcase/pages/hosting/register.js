import React from 'react';
// Theme Components
import RegisterFrm from '../../components/hosting/Forms/Register';
// Theme Wrapper
import Hosting from '../../components/wrapper/Hosting';

function Register() {
  return (
    <Hosting pageName="Register" isFull={false}>
      <RegisterFrm />
    </Hosting>
  );
}

Register.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Register;
