import React from 'react';
import { render, screen } from '@testing-library/react';

test('rendering the Logo', () =>  {
render(<img src="./CorporateCulture.svg"/>)
  const img =  screen.getByRole('img');
  expect(img).toHaveAttribute('src', './CorporateCulture.svg');
});

