import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../counter'


test('Check if Counter Paragraph with value is rendered', () => {
   
    const counts = 2;
    const {container} = render(<Counter count={counts}><p>
        Our Total User Count Is: {counts}
        </p></Counter>);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('Check if counter component is renedered or not', () => {
 
    const counts = 2;
    const {container} = render(<Counter count={counts} />)
    expect(container.firstChild).toMatchSnapshot();
  });
  