import { FunctionComponent } from 'react';
import HeaderWithSubHeader from '../../../../common/components/HeaderWithSubHeader';
import TextSectionWrapper from '../common/TextSectionWrapper';

const MyComponent: FunctionComponent = () => {
  return (
    <TextSectionWrapper>
      <HeaderWithSubHeader
        header={{ element: <span> Typy podatków dla działalności gospodarczych</span> }}
        subHeader={{
          element: (
            <div className={'opacity-80'}>
              <p className={'mt-4 font-normal'}>
                W Polsce istnieją różne typy rozliczeń podatkowych dla działalności gospodarczych, które są stosowane w
                zależności od rodzaju działalności i dochodów uzyskiwanych przez przedsiębiorców. Poniżej przedstawiam
                najważniejsze typy rozliczeń podatkowych dla działalności gospodarczych w Polsce:
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
  );
};
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
export default MyComponent;
