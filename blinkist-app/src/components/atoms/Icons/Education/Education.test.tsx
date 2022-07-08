import React from 'react';
import { render, screen } from '@testing-library/react';

test('rendering the Logo', () =>  {
render(<img src="./Education.svg"/>)
  const img =  screen.getByRole('img');
  expect(img).toHaveAttribute('src', './Education.svg');
});

