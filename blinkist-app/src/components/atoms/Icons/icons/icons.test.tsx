import React from 'react';
import {render, screen} from '@testing-library/react';
import { BlinkistLogo, DownArrow, Login, Search, Time, UpArrow } from './icons';

test('icons',()=>{
    render(<BlinkistLogo/>);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
})

test('search',()=>{
    render(<Search/>);
    expect(screen.getByTestId('search')).toBeInTheDocument();
})

test('login',()=>{
    render(<Login/>);
    expect(screen.getByTestId('login')).toBeInTheDocument();
})

test('Downarrow',()=>{
    render(<DownArrow/>);
    expect(screen.getByTestId('downarrow')).toBeInTheDocument();
})
test('uparrow',()=>{
    render(<UpArrow/>);
    expect(screen.getByTestId('uparrow')).toBeInTheDocument();
})
test('time',()=>{
    render(<Time/>);
    expect(screen.getByTestId('time')).toBeInTheDocument();
})