import { FunctionComponent } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Info } from '../../assets/icons/info.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
import { ReactComponent as Contact } from '../../assets/icons/contact.svg';

const Menu: FunctionComponent = () => {
  return (
    <nav className={'w-4/5 m-auto'}>
      <ul className={'flex flex-row justify-around items-center mt-6'}>
        <li>
          <Hamburger />
        </li>
        <li>
          <Logo />
        </li>
        <li className={'flex flex-row justify-around items-center gap-3'}>
          <Contact />
          <Info />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
