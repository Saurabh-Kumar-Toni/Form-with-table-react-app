import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../table';


test('renders the test table component properly', () => {
   

    const mockedFn = jest.fn();
    const item = [{
        username: "Rohan",
        number: "1234567890", 
        gender: "M"
      }];
    const {container} = render(<Table items={item} deleteUsers={jest.fn()} findUsers={jest.fn()}/>)
    expect(container.firstChild).toMatchSnapshot();
  });
  