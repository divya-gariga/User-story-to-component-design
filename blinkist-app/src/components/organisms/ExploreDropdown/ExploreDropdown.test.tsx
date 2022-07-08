import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import ExploreDropdown from './ExploreDropdown';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../../../pages/Entrepreneurship/Entrepreneurship',
()=>()=><div>Entrepreneurship page</div>)

const MockDropDown =() =>{
  return(  <BrowserRouter>
    <ExploreDropdown/>
    </BrowserRouter>);
}

test('Dropdown',()=>{
    render(<MockDropDown/>);
    expect(screen.getByText(/Explore by category/i)).toBeInTheDocument()
//     expect(screen.getByText(/Politics/i)).toBeInTheDocument()
//     expect(screen.getByText(/Marketing & Sales/i)).toBeInTheDocument()
//     expect(screen.getByText(/Science/i)).toBeInTheDocument()
//     expect(screen.getByText(/Health & Nutrition/i)).toBeInTheDocument()
//     expect(screen.getByText(/Personal Development/i)).toBeInTheDocument()
//     expect(screen.getByText(/Economics/i)).toBeInTheDocument()
//     expect(screen.getByText(/History/i)).toBeInTheDocument()
//     expect(screen.getByText(/Communication Skills/i)).toBeInTheDocument()
//     expect(screen.getByText(/Corporate Culture/i)).toBeInTheDocument()
//     expect(screen.getByText(/Motivation & Inspiration/i)).toBeInTheDocument()
//     expect(screen.getByText(/Money & Investments/i)).toBeInTheDocument()
//     expect(screen.getByText(/Psychology/i)).toBeInTheDocument()
//     expect(screen.getByText(/Productivity/i)).toBeInTheDocument()
//     expect(screen.getByText(/Sex & Relationship/i)).toBeInTheDocument()
//     expect(screen.getByText(/Nature & Environment/i)).toBeInTheDocument()
//     expect(screen.getByText(/Career & Success/i)).toBeInTheDocument()
//     expect(screen.getByText(/Education/i)).toBeInTheDocument()
    
//     expect(screen.getByText(/Explore By category/i)).toBeInTheDocument()
//     expect(screen.getByText(/see recently added titles/i)).toBeInTheDocument()
//     expect(screen.getByText(/see popular titles/i)).toBeInTheDocument()
    })

// test('mock entrepreneurship link',async()=>{
//   render(<MockDropDown/>)
//   fireEvent.click(screen.getByTestId('entreprenurshiplink'))
//   await (()=> expect(screen.getByText('Entrepreneurship page')).toBeInTheDocument())
// })
