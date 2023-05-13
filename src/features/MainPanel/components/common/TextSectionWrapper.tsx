import { FunctionComponent, PropsWithChildren } from 'react';

const TextSectionWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className={'text-center text-secondary-color '}>{children}</div>;
};

export default TextSectionWrapper;
