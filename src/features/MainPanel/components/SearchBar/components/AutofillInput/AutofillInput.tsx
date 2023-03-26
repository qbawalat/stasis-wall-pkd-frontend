import { ControlledInput } from './components/ControlledInput';
import { DynamicSuggestions } from './components/DynamicSuggestions';
import { FunctionComponent } from 'react';

const AutofillInput: FunctionComponent & {
  TextInput: FunctionComponent;
  Suggestions: FunctionComponent;
} = () => {
  return (
    // eslint-disable-next-line react/prop-types
    <div>
      <div>
        <AutofillInput.TextInput />
      </div>
      <div>
        <AutofillInput.Suggestions />
      </div>
    </div>
  );
};

AutofillInput.TextInput = ControlledInput;
AutofillInput.Suggestions = DynamicSuggestions;

export default AutofillInput;
