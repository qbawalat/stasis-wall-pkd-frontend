import React, { FunctionComponent } from 'react';
import AutofillInput from './components/AutofillInput/AutofillInput';
import { useFormContext } from 'react-hook-form';
import { SearchSubmit } from './components/SearchSubmit';
import { FormValues } from '../../types/FormTypes';

const SearchBar: FunctionComponent & { Input: FunctionComponent; Submit: FunctionComponent } = () => {
  const { handleSubmit } = useFormContext<FormValues>();
  return (
    <form
      onSubmit={handleSubmit((values) => {
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
  );
};

SearchBar.Input = AutofillInput;
SearchBar.Submit = SearchSubmit;

export default SearchBar;
