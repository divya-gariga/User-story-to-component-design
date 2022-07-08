import React from 'react';
import { render, screen } from '@testing-library/react';
import LineProgressBar from './LineProgressBar';
import renderer from 'react-test-renderer';
import { LinearProgress } from '@mui/material';

test('rendering the Logo', () =>  {
render(<LineProgressBar displayElement={{display:"inline-block"}} topHeight={{height:"130px"}} progressValue={0} />)
const bar=screen.getByTestId("bar");
expect(bar).toBeInTheDocument();
});

test('snapshots',()=>{
    const renderedComponent = renderer.create(<LineProgressBar displayElement={{display:"inline-block"}} topHeight={{height:"130px"}} progressValue={0} />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
})