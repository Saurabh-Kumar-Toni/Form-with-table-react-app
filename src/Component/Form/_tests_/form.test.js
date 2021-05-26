import { render, screen } from '@testing-library/react';
import Form from '../Form'

test('check if Form component is rendered properly or not', () => {
 
    const {container} = render(<Form getUsers={jest.fn()}/>)
    expect(container.firstChild).toMatchSnapshot();
  });