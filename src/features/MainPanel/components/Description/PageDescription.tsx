import { FunctionComponent } from 'react';
import HeaderWithSubHeader from '../../../../common/components/HeaderWithSubHeader';

const PageDescription: FunctionComponent = () => {
  return (
    <HeaderWithSubHeader
      header={{
        element: (
          <>
            Wyszukaj numer PKD <span className={'text-secondary-color'}>pod swój typ działalności</span>
          </>
        ),
      }}
      subHeader={{ element: <> Poznaj numer dla swojej działalności oraz opcje rozliczenia podatkowego</> }}
    />
  );
};
export default PageDescription;
