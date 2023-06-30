import { FunctionComponent } from 'react';

interface Props {
  label: string;
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = ({ label, onClick }) => (
  <button className="xl p-18 text-lg font-bold bg-primary-color rounded  w-64 h-12 p-18" onClick={onClick}>
    {label}
  </button>
);

export default Button;
