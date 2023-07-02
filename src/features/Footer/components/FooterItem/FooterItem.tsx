import { FunctionComponent } from 'react';

interface Props {
  text: string;
  onClick?: VoidFunction;
}

const FooterItem: FunctionComponent<Props> = ({ text, onClick }) => <li>{text}</li>;

export default FooterItem;
