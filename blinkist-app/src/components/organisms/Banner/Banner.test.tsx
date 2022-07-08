import React from 'react';
import {render, screen} from '@testing-library/react';
import Banner from './Banner';

test('Banner',()=>{
render(<Banner/>);
expect(screen.getByText(/Entrepreneurship/i)).toBeInTheDocument();
expect(screen.getByText(/Explore Books on Entrepreneurship/i)).toBeInTheDocument()
expect(screen.getByText(/Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start./i)).toBeInTheDocument()
})
test('girl image',()=>{
    render(<Banner/>);
    const img=screen.getByRole('img');
    expect(img).toBeInTheDocument()
})
