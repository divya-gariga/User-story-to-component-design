import React from 'react';
import { render, screen, cleanup, fireEvent,waitFor} from '@testing-library/react';
import Entrepreneurship from './Entrepreneurship';
import renderer from 'react-test-renderer';
import PersonAvatar from "../../components/atoms/Icons/PersonAvatar/PersonAvatar.svg";
import BookCards from '../../molecules/BookCard/BookCards';
import '@testing-library/jest-dom'
import {setupServer} from 'msw/node'
import {rest} from 'msw'

const server = setupServer(
  rest.get('http://localhost:8000/BooksInfo', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({ 
      "id": 2,
      "coverImage": "assets/beyond entrepreneurship 2.png",
      "title": "Beyond Entrepreneurship",
      "author": "Jim Collins & Lazier",
      "state": "finished",
      "isTrending": true,
      "isJustAdded": false,
      "isFeatured": false,
      "link": "/BeyondEntrepreneurship",
      "readCount": "1.9k reads"
    }))
  }),
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('text',()=>{
render(<Entrepreneurship/>)
expect(screen.getByText(/Explore books on entrepreneurship/i)).toBeInTheDocument();
expect(screen.getByText(/Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start./i)).toBeInTheDocument();
expect(screen.getByText(/Trending Blinks/i)).toBeInTheDocument();
expect(screen.getByText(/Just Added/i)).toBeInTheDocument();
expect(screen.getByText(/Featured Audio Books/i)).toBeInTheDocument();
expect(screen.getByTestId("trendingBlinks")).toBeInTheDocument();
expect(screen.getByTestId("justAddedBlinks")).toBeInTheDocument();
expect(screen.getByTestId("featuredBlinks")).toBeInTheDocument();
 })
 test("snapshot for Entrepreneurship page", () => {
    const renderedComponent = renderer.create(<Entrepreneurship />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
})

test("bookcard",()=>{
    render(  <BookCards
        img={"assets/beingboss.png"}
        increasedHeight="310px"
        title={"Being Boss"}
        author={"Kathleen Shannon and Emily"}
        readTime={"13-minutes read"}
        readCount={"16k reads"}
        personAvatar={PersonAvatar}
      />)
      expect(screen.getByText(/Being Boss/i)).toBeInTheDocument();
      expect(screen.getByText(/Kathleen Shannon and Emily/i)).toBeInTheDocument();
      expect(screen.getByText(/13-minutes read/i)).toBeInTheDocument();
    })

    test('loads and display blinks',async()=>{
render(<Entrepreneurship/>)
fireEvent.click(screen.getByRole('button'))
 waitFor(()=>expect(screen.getByText("Being Boss")).toBeInTheDocument())
  })

