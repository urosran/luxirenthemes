import React from 'react';
// Theme Components
import ContactFrm from '../../components/medical/Forms/Contact';
import Decoration from '../../components/medical/Forms/Decoration';
// Theme Wrapper
import Medical from '../../components/wrapper/Medical';

function Contact() {
  return (
    <Medical pageName="Contact" isFull={false}>
      <div>
        <Decoration />
        <ContactFrm />
      </div>
    </Medical>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
