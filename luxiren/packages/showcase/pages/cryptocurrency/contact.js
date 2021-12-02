import React from 'react';
// Theme Components
import ContactFrm from '../../components/crypto/Forms/Contact';
// Theme Wrapper
import Crypto from '../../components/wrapper/Crypto';

function Contact() {
  return (
    <Crypto pageName="Contact" isFull={false}>
      <ContactFrm />
    </Crypto>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
