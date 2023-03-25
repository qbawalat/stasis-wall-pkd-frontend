import { ControlledInput } from './components/ControlledInput';
import { AutofillSuggestions } from './components/AutofillSuggestions';

const AutofillInput = () => {
  return (
    <div className={'flex'}>
      <AutofillInput.TextInput />
      <AutofillInput.Suggestions />
    </div>
  );
};

AutofillInput.TextInput = ControlledInput;
AutofillInput.Suggestions = AutofillSuggestions;

export default AutofillInput;
