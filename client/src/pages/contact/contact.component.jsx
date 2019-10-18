import React from "react";

import {
  ContactPageContainer,
  ContactTitle,
  ContactText
} from "./contact.style";

const ContactPage = () => (
  <ContactPageContainer>
    <ContactTitle>Welcome to a virtual E-Commerce page.</ContactTitle>
    <ContactText>
      Please note that this is a virtual E-Commerce page, based on a Tutorial.
      All products are note real and payments are not really proccesed. Users
      are stored on a Firebase Database.
    </ContactText>
    <ContactText>
      For any further details please do not hesitate to contact me at:
      dieter.halosta@yahoo.com.
    </ContactText>
  </ContactPageContainer>
);

export default ContactPage;
