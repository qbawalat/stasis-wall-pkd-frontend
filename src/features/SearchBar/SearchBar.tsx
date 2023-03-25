import React from 'react';
import AutofillInput from './components/AutofillInput/AutofillInput';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchSubmit } from './components/SearchSubmit';

interface FormValues {
  autofillInput: string;
}

const SearchBar = () => {
  const useFormMethods = useForm<FormValues>({ defaultValues: { autofillInput: '' } });
  return (
    <FormProvider {...useFormMethods}>
      <form
        onSubmit={useFormMethods.handleSubmit((values) => {
          alert(values.autofillInput);
        })}
      >
        <main className={'flex flex-row'}>
          <SearchBar.Input />
          <div className={''}>
            <SearchBar.Submit />
          </div>
        </main>
      </form>
    </FormProvider>
  );
};

SearchBar.Input = AutofillInput;
SearchBar.Submit = SearchSubmit;

export default SearchBar;
