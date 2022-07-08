import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Secondary from './Secondary';

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Secondary label={'Finished'} onClickHandler={handleClick}/>);
  fireEvent.click(screen.getByText(/Finished/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(screen.getByText(/Finished/i)).toBeInTheDocument();

})