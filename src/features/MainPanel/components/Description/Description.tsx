import { FunctionComponent } from 'react';

const Description: FunctionComponent = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <div>
        <h1 className={'text-3xl font-bold text-primary-color'}>
          Wyszukaj numer PKD <span className={'text-secondary-color'}>pod swój typ działalności</span>
        </h1>
      </div>
      <div>
        <h2 className={'text-1xl text-tertiary-color'}>
          Poznaj numer dla swojej działalności oraz opcje rozliczenia podatkowego
        </h2>
      </div>
    </div>
  );
};
export default Description;
