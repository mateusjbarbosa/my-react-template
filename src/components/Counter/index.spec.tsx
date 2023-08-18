import { fireEvent, render } from '@testing-library/react';
import { Counter } from '.';

describe('<Counter />', () => {
  it('should render component with initial value', () => {
    const { getByText } = render(<Counter />);

    const counterText = getByText('Counter: 0');
    expect(counterText).toBeInTheDocument();
  });

  it('should increment counter value correctly', () => {
    const { getByRole, getByText } = render(<Counter />);

    const initialCounterText = getByText('Counter: 0');
    expect(initialCounterText).toBeInTheDocument();

    const incrementButton = getByRole('button');
    fireEvent.click(incrementButton);

    const incrementedCounterText = getByText('Counter: 1');
    expect(incrementedCounterText).toBeInTheDocument();
  });
});
