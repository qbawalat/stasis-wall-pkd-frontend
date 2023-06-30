import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/footer-logo.svg';
import FooterItem from './components/FooterItem';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <div className="h-44 mt-24 flex items-center bg-secondary">
      <div className="flex justify-between text-tertiary-color w-4/5 m-auto text-base font-semibold">
        <ul className="flex flex-row justify-around items-center mt-6 gap-12">
          <li onClick={scrollToTop}>
            <Logo />
          </li>
          {contact.map((el) => (
            <FooterItem text={el} />
          ))}
        </ul>
        <ul className="flex flex-row justify-around items-center mt-6 gap-12">
          {politics.map((el) => (
            <FooterItem text={el} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

const contact = ['Wyszukiwarka PKD', 'O nas', 'Kontakt'];
const politics = ['Polityka prywatności', 'Polityka plików cookies'];
