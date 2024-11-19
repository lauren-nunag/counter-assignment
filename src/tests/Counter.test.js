// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const header = screen.getByRole('heading', {name: /Counter/i }); //find a heading element named "Counter"
  expect(header).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count'); //this searches for the element by its data-testid value
  expect(count.textContent).toBe('0'); //uses expect fnc to define the textContent to be 0
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText('+'); //selectt he button with the text '+'
  fireEvent.click(increment); // "fires" or simulates a click event
  const countElement = screen.getByTestId('count'); 
  expect(countElement.textContent).toBe('1'); //check that the countElement's textContent is now '1'
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText('-'); //same as above test, just replacing it for '-' button
  fireEvent.click(decrement);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('-1');
});
