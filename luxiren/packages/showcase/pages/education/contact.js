import React from 'react';
import ContactFrm from '../../components/education/Forms/Contact';
// Theme Wrapper
import Education from '../../components/wrapper/Education';

function Contact() {
  return (
    <Education pageName="Contact" isFull={false}>
      <ContactFrm />
    </Education>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common', 'education-landing'],
});

export default Contact;
