import { FunctionComponent } from 'react';
import PageDescription from './components/Description/PageDescription';
import SearchBar from './components/SearchBar/SearchBar';
import { Tip } from './components/Tip/Tip';
import { FormProvider, useForm } from 'react-hook-form';
import { FormValues } from './types/FormTypes';
import SubheadersSection from './components/SubheadersSection/SubheadersSection';
import { TopBanners } from './components/TopBanners/TopBanners';
import BottomBanner from './components/BottomBanner/BottomBanner';
import HeaderWithSubHeader from '../../common/components/HeaderWithSubHeader';
import TextSectionWrapper from './components/common/TextSectionWrapper';

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
      <div className={imageSectionWidth}>
        <BottomBanner />
      </div>
      <div className={textSectionWidth}>
        <TextSectionWrapper>
          <HeaderWithSubHeader
            header={{ element: <span> Typy podatków dla działalności gospodarczych</span> }}
            subHeader={{
              element: (
                <p className={'mt-4'}>
                  W Polsce istnieją różne typy rozliczeń podatkowych dla działalności gospodarczych, które są stosowane
                  w zależności od rodzaju działalności i dochodów uzyskiwanych przez przedsiębiorców. Poniżej
                  przedstawiam najważniejsze typy rozliczeń podatkowych dla działalności gospodarczych w Polsce:
                </p>
              ),
            }}
          />
        </TextSectionWrapper>
      </div>
    </div>
  );
};
const imageSectionWidth = 'w-7/12';
const textSectionWidth = 'w-5/12';

export default MainPanel;
