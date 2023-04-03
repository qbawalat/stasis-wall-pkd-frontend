import { FunctionComponent } from 'react';
import PageDescription from './components/Description/PageDescription';
import SearchBar from './components/SearchBar/SearchBar';
import { Tip } from './components/Tip/Tip';
import { FormProvider, useForm } from 'react-hook-form';
import { FormValues } from './types/FormTypes';
import SubheadersSection from './components/SubheadersSection/SubheadersSection';

const MainPanel: FunctionComponent = () => {
  const useFormMethods = useForm<FormValues>({ defaultValues: { autofillInput: '' } });
  return (
    <div className={'flex flex-col items-center gap-8'}>
      <div>
        <PageDescription />
      </div>
      <FormProvider {...useFormMethods}>
        <div>
          <SearchBar />
        </div>
        <div>{<Tip />}</div>
      </FormProvider>
      <div>
        <SubheadersSection />
      </div>
    </div>
  );
};

export default MainPanel;
