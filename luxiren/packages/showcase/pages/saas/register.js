import React from 'react';
// Theme Components
import RegisterFrm from '../../components/saas/Forms/Register';
// Theme Wrapper
import Saas from '../../components/wrapper/Saas';

function Register() {
  return (
    <Saas pageName="Register" isFull={false}>
      <RegisterFrm />
    </Saas>
  );
}

Register.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Register;
