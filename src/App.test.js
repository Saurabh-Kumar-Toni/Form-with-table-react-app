import { render, screen } from '@testing-library/react';
import App from './App';

test('renders teh Application properly', () => {
  const {container} = render(<App><h2>Hello World</h2></App>);
  expect(container.firstChild).toBeInTheDocument();
});

test('renders the App Component Snapshot', () => {
 
  const {container} = render(<App />)
  expect(container.firstChild).toMatchSnapshot();
});
