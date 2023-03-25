import { useFormContext } from 'react-hook-form';
import { FunctionComponent } from 'react';
import { FormValues } from '../../../SearchBar';

export const DynamicSuggestions: FunctionComponent = () => {
  const { setValue, watch, getFieldState } = useFormContext<FormValues>();
  const inputValue = watch('autofillInput');
  const isDirty = getFieldState('autofillInput').isDirty;
  return isDirty ? (
    <div className={'bg-primary-color-1'}>
      <ul>
        {INPUT_OPTIONS.filter(isIncludedInSuggestions(inputValue)).map((option) => (
          <li
            role={'presentation'}
            onClick={() => {
              setValue('autofillInput', option);
            }}
            key={option}
            className={'text-gray-50 text-2xl cursor-pointer hover:text-green-400'}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

const isIncludedInSuggestions = (fieldValue: string) => (option: string) =>
  option.toLowerCase().includes(fieldValue.toLowerCase()) && option.toLowerCase() !== fieldValue.toLowerCase();

const INPUT_OPTIONS = ['stasis', 'wall', 'goat'];
