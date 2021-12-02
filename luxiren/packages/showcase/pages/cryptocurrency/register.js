import React from 'react';
// Theme Components
import RegisterFrm from '../../components/crypto/Forms/Register';
// Theme Wrapper
import Crypto from '../../components/wrapper/Crypto';

function Register() {
  return (
    <Crypto pageName="Register" isFull={false}>
      <RegisterFrm />
    </Crypto>
  );
}

Register.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Register;
