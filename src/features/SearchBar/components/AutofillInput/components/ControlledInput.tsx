import { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';

export const ControlledInput: FunctionComponent = () => {
  const { register } = useFormContext();
  return <input aria-label={'autofill input'} className={'bg-amber-500'} {...register('autofillInput')} />;
};
