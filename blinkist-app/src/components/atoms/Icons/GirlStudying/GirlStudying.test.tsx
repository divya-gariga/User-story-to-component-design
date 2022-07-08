import React from 'react';
import { render, screen } from '@testing-library/react';

test('rendering the Logo', () =>  {
render(<img src="./GirlStudying.svg"/>)
  const img =  screen.getByRole('img');
  expect(img).toHaveAttribute('src', './GirlStudying.svg');
});

