import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '~/public/text/brand';
import ContactFrm from '../components/Forms/Contact';
import Decoration from '../components/Forms/Decoration';
import { withTranslation } from '../i18n';

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.medical.name }
          &nbsp; - Contact
        </title>
      </Head>
      <div>
        <Decoration />
        <ContactFrm />
      </div>
    </Fragment>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Contact);
