import React from 'react';
// Theme Components
import ContactFrm from '../../components/hosting/Forms/Contact';
// Theme Wrapper
import Hosting from '../../components/wrapper/Hosting';

function Contact() {
  return (
    <Hosting pageName="Contact" isFull={false}>
      <ContactFrm />
    </Hosting>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
