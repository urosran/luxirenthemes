import React from 'react';
// Theme Components
import ContactFrm from '../../components/mobile/Forms/Contact';
// Theme Wrapper
import Mobile from '../../components/wrapper/Mobile';

function Contact() {
  return (
    <Mobile pageName="Contact" isFull={false}>
      <ContactFrm />
    </Mobile>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
