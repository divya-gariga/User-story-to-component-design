import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../ExploreDropdown/ExploreDropdown',
  () => () => <div id="drop" data-testid="drop">dropdown</div>)
const MockHeader = () => {
  return (<BrowserRouter>
    <Header />
  </BrowserRouter>);
}
test('My Library', () => {
  render(<MockHeader />);
  expect(screen.getByText(/My Library/i)).toBeInTheDocument()
})
test('Explore', () => {
  render(<MockHeader />);
  expect(screen.getByText(/Explore/i)).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('dropdown'))
  // expect(screen.getByTestId('uparrow')).toBeInTheDocument()
  expect(screen.getByText(/dropdown/i)).toBeInTheDocument()
})
test('test all icons in the header', () => {
  render(<MockHeader />)
  expect(screen.getByTestId('logo')).toBeInTheDocument()
  expect(screen.getByTestId('search')).toBeInTheDocument()
  expect(screen.getByTestId('login')).toBeInTheDocument()
  const count = screen.getAllByTestId('downarrow')
  expect(count.length).toBe(2)
})