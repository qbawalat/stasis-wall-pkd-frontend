import { FunctionComponent } from 'react';

const Menu: FunctionComponent = () => {
  return (
    <nav>
      <ul className={' [&>*]:float-left'}>
        <li>expandable options</li>
        <li>logo</li>
        <li>
          <ul>
            <li>icon1</li>
            <li>icon2</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
