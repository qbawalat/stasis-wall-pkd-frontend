import { useFormContext } from 'react-hook-form';
import { FunctionComponent } from 'react';

export const AutofillSuggestions: FunctionComponent = () => {
  const { setValue, watch } = useFormContext();
  const inputValue = watch('autofillInput');
  return (
    <>
      {inputValue &&
        INPUT_OPTIONS.filter(isIncludedInSuggestions(inputValue)).map((option) => (
          <div
            role={'presentation'}
            onClick={() => {
              setValue('autofillInput', option);
            }}
            key={option}
            className={'text-cyan-600 text-2xl cursor-pointer hover:text-green-400'}
          >
            {option}
          </div>
        ))}
    </>
  );
};

const isIncludedInSuggestions = (fieldValue: string) => (option: string) =>
  option.toLowerCase().includes(fieldValue.toLowerCase());

const INPUT_OPTIONS = ['stasis', 'wall', 'goat'];
