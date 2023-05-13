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
      <div className={'mt-12 ' + imageSectionWidth}>
        <BottomBanner />
      </div>
      <div className={'mt-12 ' + textSectionWidth}>
        <TextSectionWrapper>
          <HeaderWithSubHeader
            header={{ element: <span> Typy podatków dla działalności gospodarczych</span> }}
            subHeader={{
              element: (
                <div className={'opacity-80'}>
                  <p className={'mt-4 font-normal'}>
                    W Polsce istnieją różne typy rozliczeń podatkowych dla działalności gospodarczych, które są
                    stosowane w zależności od rodzaju działalności i dochodów uzyskiwanych przez przedsiębiorców.
                    Poniżej przedstawiam najważniejsze typy rozliczeń podatkowych dla działalności gospodarczych w
                    Polsce:
                  </p>
                  {TAX_TYPES.map((taxType, index) => (
                    <div className={'text-left text-secondary-color mt-6 font-semibold'} key={taxType}>
                      {index + 1}. {taxType}
                    </div>
                  ))}
                </div>
              ),
            }}
          />
        </TextSectionWrapper>
      </div>
    </div>
  );
};
const imageSectionWidth = 'w-8/12';
const textSectionWidth = 'w-6/12';
const TAX_TYPES = [
  'Ryczałt ewidencjonowany - jest to uproszczona forma rozliczenia podatku dochodowego, w której przedsiębiorca płaci stałą, miesięczną kwotę podatku, bez konieczności rozliczania dochodów i kosztów uzyskania przychodów.',
  'Karty podatkowe - są to specjalne karty, na których przedsiębiorcy wpisują dochody i koszty uzyskania przychodów. Podatek dochodowy jest naliczany na podstawie wpisanych na karcie kwot.',
  'Skala podatkowa - jest to forma rozliczenia podatku dochodowego, w której przedsiębiorca płaci podatek według stawek procentowych odpowiadających poszczególnym przedziałom dochodu.',
  'Podatek liniowy - jest to forma rozliczenia podatku dochodowego, w której przedsiębiorca płaci stałą, procentową stawkę podatku od całego dochodu.',
  'Podatek VAT - dotyczy sprzedaży towarów i usług, a jego stawka wynosi obecnie 23%.',
  'Podatek od spadków i darowizn - dotyczy przekazania majątku w drodze darowizny lub spadku.',
  'Podatek od wynajmu mieszkań - dotyczy wynajmu mieszkań lub pokoi, a jego stawka wynosi obecnie 8,5%.',
  'Podatek od gier - dotyczy gier losowych, zakładów wzajemnych oraz innych gier hazardowych.',
  'Podatek od sprzedaży paliw - dotyczy sprzedaży paliw, takich jak benzyna, olej napędowy, gaz LPG itp.',
];
export default MainPanel;
