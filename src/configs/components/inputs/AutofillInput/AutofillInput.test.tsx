import { render } from '@testing-library/react';
import AutofillInput from './AutofillInput';

describe('AutofillInput', () => {
  it('renders input', () => {
    const { getByText } = render(<AutofillInput />);
    expect(getByText('lasagne')).toBeInTheDocument();
  });
});
