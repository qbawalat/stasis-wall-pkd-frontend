import { FunctionComponent } from 'react';
import PageDescription from './components/Description/PageDescription';
import SearchBar from './components/SearchBar/SearchBar';
import { Tip } from './components/Tip/Tip';
import { FormProvider, useForm } from 'react-hook-form';
import { FormValues } from './types/FormTypes';
import SubheadersSection from './components/SubheadersSection/SubheadersSection';
import { TopBanners } from './components/TopBanners/TopBanners';
import BottomBanner from './components/BottomBanner/BottomBanner';
import TaxTypes from './components/TaxTypes/TaxTypes';

const MainPanel: FunctionComponent = () => {
  const useFormMethods = useForm<FormValues>({ defaultValues: { autofillInput: '' } });
  return (
    <div className={'flex flex-col items-center gap-8'}>
      <PageDescription />
      <FormProvider {...useFormMethods}>
        <SearchBar />
        <Tip />
      </FormProvider>
      <div className={'mt-32 ' + imageSectionWidth}>
        <TopBanners />
      </div>
      <div className={textSectionWidth}>
        <SubheadersSection />
      </div>
      <div className={'mt-12 ' + imageSectionWidth}>
        <BottomBanner />
      </div>
      <div className={'mt-12 ' + textSectionWidth}>
        <TaxTypes />
      </div>
    </div>
  );
};
const imageSectionWidth = 'w-8/12';
const textSectionWidth = 'w-6/12';

export default MainPanel;
