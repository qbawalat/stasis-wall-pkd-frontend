import { FunctionComponent } from 'react';
import HeaderWithSubHeader from '../../../../common/components/HeaderWithSubHeader';

const SubheadersSection: FunctionComponent = () => {
  return (
    <div className={'text-center text-secondary-color '}>
      {MOCK.sections.map(({ title, description }) => (
        <div className={'mt-16'} key={title}>
          <HeaderWithSubHeader
            header={{ element: title }}
            subHeader={{
              element: (
                <>
                  {description.map((desc) => (
                    <p key={desc} className={'mt-4'}>
                      {desc}
                    </p>
                  ))}
                </>
              ),
            }}
          />
        </div>
      ))}
    </div>
  );
};

const MOCK = {
  sections: [
    {
      title: 'Co to jest numer PKD',
      description: [
        'Numer PKD (Polska Klasyfikacja Działalności) to kod, który służy do określenia rodzaju działalności gospodarczej prowadzonej przez firmę lub osobę fizyczną. Numer PKD jest używany m.in. do rejestracji działalności gospodarczej, wypełniania deklaracji podatkowych oraz do celów statystycznych. PKD składa się z 10 cyfr, które oznaczają konkretne branże i rodzaje działalności. Każdy numer PKD odpowiada konkretnemu opisowi działalności gospodarczej zawartemu w Polskiej Klasyfikacji Działalności.',
      ],
    },
    {
      title: 'Ile można mieć numerów PKD?',
      description: [
        'W zależności od rodzaju działalności gospodarczej, jedna firma lub osoba fizyczna mogą mieć jeden lub więcej numerów PKD. Jeśli firma lub osoba prowadzi tylko jedną działalność, to będzie mieć tylko jeden numer PKD. Jeśli natomiast prowadzi kilka różnych działalności, to może mieć kilka numerów PKD, które odpowiadają poszczególnym rodzajom działalności.',
        'Przykładowo, jeśli firma zajmuje się sprzedażą detaliczną odzieży oraz naprawą samochodów, to będzie mieć dwa różne numery PKD: jeden dla sprzedaży detalicznej odzieży i drugi dla naprawy samochodów. W takim przypadku firma musi wskazać oba numery PKD we wszystkich dokumentach związanych z jej działalnością, takich jak deklaracje podatkowe czy zgłoszenia do rejestru działalności gospodarczej.',
      ],
    },
    {
      title: 'Czy numer PKD ma wpływ na podatek?',
      description: [
        'Numer PKD jest ważnym elementem przy rozliczaniu podatków w Polsce. W zależności od rodzaju działalności gospodarczej i numeru PKD, firma lub osoba fizyczna może być zobowiązana do odprowadzenia różnych rodzajów podatków.',
        'Przykładowo, jeśli firma prowadzi działalność związaną z handlem detalicznym, to będzie zobowiązana do odprowadzenia podatku VAT (podatku od towarów i usług). Jeśli natomiast prowadzi działalność związaną z usługami budowlanymi, to będzie zobowiązana do odprowadzenia podatku VAT oraz podatku od wynagrodzeń pracowników.',
        'Numer PKD jest również ważny przy ustalaniu wysokości składek na ubezpieczenie społeczne i zdrowotne, które są odprowadzane przez przedsiębiorców. W zależności od rodzaju działalności i numeru PKD, składki te mogą być wyższe lub niższe.',
        'Podsumowując, numer PKD jest ważnym elementem przy rozliczaniu podatków i odprowadzaniu składek na ubezpieczenie społeczne i zdrowotne. W zależności od rodzaju działalności gospodarczej i numeru PKD, firma lub osoba fizyczna mogą być zobowiązani do odprowadzenia różnych rodzajów podatków i składek.',
      ],
    },
  ],
};

export default SubheadersSection;
