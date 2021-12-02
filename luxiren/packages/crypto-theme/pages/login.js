import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '../public/text/brand';
import LoginForm from '../components/Forms/Login';

function Login() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.crypto.name }
          &nbsp; - Login
        </title>
      </Head>
      <div>
        <LoginForm />
      </div>
    </Fragment>
  );
}

Login.getInitialProps = async () => ({
  namespacesRequired: ['common', 'hosting-landing'],
});

export default Login;
