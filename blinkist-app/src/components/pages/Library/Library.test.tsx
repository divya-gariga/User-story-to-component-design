import React from 'react';
import { render, screen } from '@testing-library/react';
import Library from './Library';
import renderer from 'react-test-renderer';
import PersonAvatar from "../../components/atoms/Icons/PersonAvatar/PersonAvatar.svg";
import BookCards from '../../molecules/BookCard/BookCards';
import axios from 'axios';
import update from './Library'

test('typography', () => {
    render(<Library />)
    expect(screen.getByText(/My Library/i)).toBeInTheDocument();
    expect(screen.getByText(/Currently Reading/i)).toBeInTheDocument();
    expect(screen.getByText(/Finished/i)).toBeInTheDocument();
    expect(screen.getByTestId("panel1")).toBeInTheDocument();
    expect(screen.getByTestId("panel1")).toBeInTheDocument();
    // expect(screen.getByTestId("bar")).toBeInTheDocument();
    // expect(screen.getByTestId("1")).toBeInTheDocument();
    expect(screen.getByTestId("box")).toBeInTheDocument();
    // expect(screen.getByTestId("container1")).toBeInTheDocument();
    // /expect(screen.getByTestId("container2")).toBeInTheDocument();
    // expect(screen.getByTestId("finishedButton")).toBeInTheDocument();
    // expect(screen.getByTestId("readAgainButton")).toBeInTheDocument();

})

test("snapshot for app component 1", () => {
    const renderedComponent = renderer.create(<Library />).toJSON()
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
      expect(screen.getByText(/16k reads/i)).toBeInTheDocument();
      expect(screen.getByAltText(/media/i)).toBeInTheDocument();
    })
// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe("fetch data",()=>{
//     it("fetch successfully ",async ()=>{
//         const data={
//             data:{
//             BooksInfo: [
//                 {
//                   "id": 1,
//                   "coverImage": "assets/beingboss.png",
//                   "title": "Being Boss",
//                   "author": "Kathleen Shannon and Emily",
//                   "state": "finished",
//                   "isTrending": true,
//                   "isJustAdded": false,
//                   "isFeatured": false,
//                   "link": "#",
//                   "readCount": ""
//                 }]}
//         };
//         mockedAxios.get.mockImplementationOnce(()=>Promise.resolve(data))
//         render(<Library/>);
//         await expect().resolves.toEqual(data);
//     });
  
// })