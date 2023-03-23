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
        <SearchBar.Input />
        <SearchBar.Submit />
      </form>
    </FormProvider>
  );
};

SearchBar.Input = AutofillInput;
SearchBar.Submit = SearchSubmit;

export default SearchBar;
