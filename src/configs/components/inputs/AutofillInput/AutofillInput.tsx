import { FunctionComponent, useState } from 'react';

const AutofillInput: FunctionComponent = () => {
  const [fieldValue, setFieldValue] = useState('');
  return (
    <>
      <input
        value={fieldValue}
        onChange={({ target: { value } }) => {
          setFieldValue(value);
        }}
        aria-label={'autofill input'}
        className={'bg-amber-500'}
      />
      {INPUT_OPTIONS.filter((option) => option.toLowerCase().includes(fieldValue.toLowerCase())).map((option) => (
        <p
          role={'presentation'}
          onClick={() => {
            setFieldValue(option);
          }}
          key={option}
          className={'text-cyan-600 text-5xl cursor-pointer hover:text-green-400'}
        >
          {option}
        </p>
      ))}
    </>
  );
};

const INPUT_OPTIONS = ['stasis', 'wall', 'goat'];

export default AutofillInput;
