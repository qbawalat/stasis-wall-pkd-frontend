import { ReactElement } from 'react';
import FooterItem from '../FooterItem/FooterItem';

const Politics = (): ReactElement => (
  <ul className="flex flex-row justify-around items-center mt-6 gap-12">
    {politics.map((el) => (
      <FooterItem text={el} />
    ))}
  </ul>
);

export default Politics;

const politics = ['Polityka prywatności', 'Polityka plików cookies'];
