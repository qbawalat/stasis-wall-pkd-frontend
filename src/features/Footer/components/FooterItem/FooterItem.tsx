import { FunctionComponent } from 'react';

interface Props {
  text: string;
  onClick?: () => void;
}

const FooterItem: FunctionComponent<Props> = ({ text, onClick }) => <li>{text}</li>;

export default FooterItem;
