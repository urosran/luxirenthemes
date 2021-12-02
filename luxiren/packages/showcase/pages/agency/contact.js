import React from 'react';
// Theme Components
import ContactFrm from '../../components/agency/Forms/Contact';
import Decoration from '../../components/agency/Forms/Decoration';
// Theme Wrapper
import Agency from '../../components/wrapper/Agency';

function Contact() {
  return (
    <Agency pageName="Contact" isFull={false}>
      <div>
        <Decoration />
        <ContactFrm />
      </div>
    </Agency>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
