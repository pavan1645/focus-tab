import React from 'react';
import BackgroundImage from '../../BackgroundImage/BackgroundImage';
import { render, screen } from '@testing-library/react';

const imageUrl = 'someurl';

test('renders background image', () => {
  render(<BackgroundImage imageUrl={imageUrl} />);
  expect(document.body).toHaveStyle({'background-image': `url(${imageUrl})`});
});
