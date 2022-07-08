import React from 'react';
import {render, screen} from '@testing-library/react';
import Footer from './Footer';

test('Footer',()=>{
    render(<Footer/>);
    expect(screen.getByText(/Big ideas in small packages start learning now/i)).toBeInTheDocument()   
    expect(screen.getByText(/Editorial/i)).toBeInTheDocument()
    expect(screen.getByText(/Useful links/i)).toBeInTheDocument()
    expect(screen.getByText(/company/i)).toBeInTheDocument()
    expect(screen.getByText(/©Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies/i)).toBeInTheDocument()
 })