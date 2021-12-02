import React from 'react';
// Theme Components
import ContactFrm from '../../components/saas/Forms/Contact';
// Theme Wrapper
import Saas from '../../components/wrapper/Saas';

function Contact() {
  return (
    <Saas pageName="Contact" isFull={false}>
      <ContactFrm />
    </Saas>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
