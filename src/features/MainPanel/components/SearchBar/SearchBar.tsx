import React, { FunctionComponent } from 'react';
import AutofillInput from './components/AutofillInput/AutofillInput';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchSubmit } from './components/SearchSubmit';

export interface FormValues {
  autofillInput: string;
}

const SearchBar: FunctionComponent & { Input: FunctionComponent; Submit: FunctionComponent } = () => {
  const useFormMethods = useForm<FormValues>({ defaultValues: { autofillInput: '' } });
  return (
    <FormProvider {...useFormMethods}>
      <form
        onSubmit={useFormMethods.handleSubmit((values) => {
          alert(values.autofillInput);
        })}
        autoComplete={'off'}
      >
        <main className={'flex flex-row gap-8'}>
          <SearchBar.Input />
          <div>
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
