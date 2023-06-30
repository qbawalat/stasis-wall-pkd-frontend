import { FC } from 'react';

interface Props {
  text: string;
  onClick?: () => void;
}

const FooterItem: FC<Props> = ({ text, onClick }) => {
  return <li>{text}</li>;
};

export default FooterItem;
