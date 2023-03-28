import { useFormContext } from 'react-hook-form';
import { FunctionComponent, useEffect, useState } from 'react';
import { FormValues } from '../../../../../types/FormTypes';

export const DynamicSuggestions: FunctionComponent = () => {
  const { setValue, watch, getFieldState } = useFormContext<FormValues>();
  const inputValue = watch('autofillInput');
  const isDirty = getFieldState('autofillInput').isDirty;
  const options = INPUT_OPTIONS.filter(isIncludedInSuggestions(inputValue));
  return isDirty && options.length ? (
    <div className={'bg-primary-color rounded p-1 text-center'}>
      <ul>
        {options.map((option) => (
          <li
            role={'presentation'}
            onClick={() => {
              setValue('autofillInput', option);
            }}
            key={option}
            className={'text-gray-50 text-2xl cursor-pointer hover:text-green-400 '}
          >
            <DynamicallyColoredText textPart={inputValue} wholeText={option} />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};
// TODO extract
const DynamicallyColoredText: FunctionComponent<{ wholeText: string; textPart: string }> = ({
  wholeText,
  textPart,
}) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = wholeText.indexOf(textPart) + textPart.length;
    console.log('ej', lastIndex);
    setIndex(lastIndex);
  }, [textPart]);
  return (
    <>
      <span className={'opacity-50'}>{wholeText.substring(0, index)}</span>
      <span>{wholeText.substring(index)}</span>
    </>
  );
};

const isIncludedInSuggestions = (fieldValue: string) => (option: string) =>
  option.toLowerCase().startsWith(fieldValue.toLowerCase()) && option.toLowerCase() !== fieldValue.toLowerCase();

const INPUT_OPTIONS = ['programista', 'informatyk', 'marketingowiec', 'it support', 'it'];
