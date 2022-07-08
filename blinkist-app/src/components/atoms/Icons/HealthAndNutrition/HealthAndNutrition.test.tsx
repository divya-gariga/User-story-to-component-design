
import React from 'react';
import { render, screen } from '@testing-library/react';

test('rendering the Logo', () =>  {
render(<img src="./HealthAndNutrition.svg"/>)
  const img =  screen.getByRole('img');
  expect(img).toHaveAttribute('src', './HealthAndNutrition.svg');
});

