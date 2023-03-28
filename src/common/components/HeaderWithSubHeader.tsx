import { FunctionComponent } from 'react';

type ElementProps = { element: JSX.Element; styles?: string };
type Props = {
  header: ElementProps;
  subHeader: ElementProps;
  containerStyles?: string;
};
const HeaderWithSubHeader: FunctionComponent<Props> = ({ containerStyles, header, subHeader }) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${containerStyles}`}>
      <div>
        <h1 className={`text-3xl font-bold text-primary-color ${header.styles}`}>{header.element}</h1>
      </div>
      <div>
        <h2 className={`text-base text-tertiary-color ${subHeader.styles}`}>{subHeader.element}</h2>
      </div>
    </div>
  );
};

export default HeaderWithSubHeader;
