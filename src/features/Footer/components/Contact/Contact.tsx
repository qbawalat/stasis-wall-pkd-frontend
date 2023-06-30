import { ReactElement } from 'react';
import FooterItem from '../FooterItem/FooterItem';

const Contact = (): ReactElement => {
  return (
    <>
      {contact.map((el) => (
        <FooterItem text={el} />
      ))}
    </>
  );
};

export default Contact;

const contact = ['Wyszukiwarka PKD', 'O nas', 'Kontakt'];
