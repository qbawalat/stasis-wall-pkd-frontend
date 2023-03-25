import { ControlledInput } from './components/ControlledInput';
import { AutofillSuggestions } from './components/AutofillSuggestions';

const AutofillInput = () => {
  return (
    <div>
      <AutofillInput.TextInput />
      <AutofillInput.Suggestions />
    </div>
  );
};

AutofillInput.TextInput = ControlledInput;
AutofillInput.Suggestions = AutofillSuggestions;

export default AutofillInput;
