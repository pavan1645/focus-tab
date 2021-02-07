import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import App from '../App';

test('renders current time', () => {
  render(<App />);

  const timeEl = document.querySelector('h1')
  expect(timeEl).toBeInTheDocument();
  
  const time = getNodeText(timeEl);
  expect(time).toMatch(/\d{2}:\d{2} (AM|PM)/);
});
