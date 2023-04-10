import { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';

export const ControlledInput: FunctionComponent = () => {
  const { register } = useFormContext();
  return (
    <input
      autoCorrect={'off'}
      type={'text'}
      aria-label={'autofill input'}
      className="focus:outline-none text-primary-color p-2 bg-transparent border border-primary-color text-lg font-bold bg-primary-color rounded  h-12 p-18 min-w-24"
      {...register('autofillInput')}
    />
  );
};
