import { ReactElement } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/footer-logo.svg';
import Politics from './components/Politics/Politics';
import Contact from './components/Contact/Contact';
import { scrollToTop } from '../../common/utils';

const Footer = (): ReactElement => {
  return (
    <div className="h-44 mt-24 flex items-center bg-secondary">
      <div className="flex justify-between text-tertiary-color w-4/5 m-auto text-base font-semibold">
        <ul className="flex flex-row justify-around items-center mt-6 gap-12">
          <li onClick={scrollToTop}>
            <Logo />
          </li>
          <Contact />
        </ul>
        <Politics />
      </div>
    </div>
  );
};

export default Footer;
