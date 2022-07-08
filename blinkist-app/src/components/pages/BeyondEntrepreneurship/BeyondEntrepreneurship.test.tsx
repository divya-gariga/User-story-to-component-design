import React from 'react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { fireEvent, render, screen,waitFor } from '@testing-library/react';
import BeyondEntrepreneurship from './BeyondEntrepreneurship';

test('BeyondEntrepreneurship text', () => {
  render(<BeyondEntrepreneurship />);
  expect(screen.getByText(/Beyond Entrepreneurship 2.0/i)).toBeInTheDocument()
})
test('BeyondEntrepreneurship quote and author', () => {
  render(<BeyondEntrepreneurship />);
  expect(screen.getByText(/Synopsis/i)).toBeInTheDocument();
  expect(screen.getByText(/who is it for/i)).toBeInTheDocument();
  expect(screen.getByText(/about the author/i)).toBeInTheDocument();
  expect(screen.getByText(/By Jim Collins and Bill Lazier/i)).toBeInTheDocument();
  expect(screen.getByText(/Turning your business into an Enduring great company/i)).toBeInTheDocument();
})
test('Read now', () => {
  render(<BeyondEntrepreneurship />);
  const readnow = screen.getByRole('button', { name: 'Read now' });
  expect(readnow).toBeInTheDocument();
})
test('Finished buttons', () => {
  render(<BeyondEntrepreneurship />);
  const finished = screen.getByRole('button', { name: 'Finished Reading' });
  expect(finished).toBeInTheDocument();

})
test('book img', () => {
  render(<BeyondEntrepreneurship />);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
})

