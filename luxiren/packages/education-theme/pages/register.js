import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '../public/text/brand';
import RegisterForm from '../components/Forms/Register';

function Register() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.education.name }
          &nbsp; - Register
        </title>
      </Head>
      <div>
        <RegisterForm />
      </div>
    </Fragment>
  );
}

Register.getInitialProps = async () => ({
  namespacesRequired: ['common', 'education-landing'],
});

export default Register;
