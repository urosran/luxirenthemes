import React from 'react';
// Theme Components
import ContactFrm from '../../components/architect/Forms/Contact';
// Theme Wrapper
import Architect from '../../components/wrapper/Architect';

function Contact() {
  return (
    <Architect pageName="Contact" isFull={false}>
      <ContactFrm />
    </Architect>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
