import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCards from "../../molecules/BookCard/BookCards";
import Primary from "../../molecules/Buttons/Primary/Primary";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Banner from "../../organisms/Banner/Banner";
import PersonAvatar from "../../atoms/Icons/PersonAvatar/PersonAvatar.svg";
import LineProgressBar from "../../atoms/Icons/ProgressBar/LineProgressBar";
import { isExportDeclaration } from "typescript";
function Entrepreneurship() {
  const [blinksInfo, setBlinksInfo] = useState([]);
  const [blinkState, setBlinkState] = useState(false);
  async function onClickOfAddtoLibrary(
    book: {
      coverImage: string;
      title: string;
      author: string;
      state: string;
      isTrending: boolean;
      isJustAdded: boolean;
      isFeatured: boolean;
      readCount: string;
    },
    id: number
  ) {
    await axios
      .put(`http://localhost:8000/BooksInfo/${id}`, {
        ...book,
        state: "reading",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setBlinkState(!blinkState);
  }
  async function getBookInfo() {
    await axios
      .get("http://localhost:8000/BooksInfo")
      .then((response) => {
        const data = response.data;
        setBlinksInfo(data);
      })
  }
  useEffect(() => {
    getBookInfo();
  }, [blinkState]);
  const styles = {
    title: {
      fontFamily: "CeraProBold",
      fontStyle: "normal",
      color: "#03314B",
      fontSize: "24px",
      lineHeight: "30px",
    },
    padding: {
      padding: "100px 18.33% 76px 18.33%",
    },
    link: {
      textDecoration: "none",
    }
  };
  function cardBuilder(book: {
    id: number;
    coverImage: string;
    title: string;
    author: string;
    state: string;
    isTrending: boolean;
    isJustAdded: boolean;
    isFeatured: boolean;
    link: string;
    readCount: string;
  }) {
    let displayProgressBar = "";
    let displayAddToLibrary = "";
    let displayAvatar: any;
    if (book["readCount"] == "") {
      displayAvatar = null;
    }
    else {
      displayAvatar = PersonAvatar;
    }
    let increaseCardHeight = "310px";
    if (book["state"] == "") {
      displayProgressBar = "none";
    } else if (book["state"] != "") {
      displayAddToLibrary = "none";
      increaseCardHeight = "335px";
    }
    function exportId(id: Number) {
      console.log("on clicking" + id);
    }
    return (
      <Grid item pb={"25px"} key={book["id"]} data-testid={`${book["id"]}`}>
        <Box width={"300px"}>
          <Link to={{ pathname: `/Entrepreneurship/${book["id"]}` }} style={styles.link}>
            <div>
              <BookCards
                img={book["coverImage"]}
                title={book["title"]}
                author={book["author"]}
                readCount={book["readCount"]}
                readTime={"13 minutes read"}
                personAvatar={displayAvatar}
                increasedHeight={increaseCardHeight}
              />
            </div>
          </Link>
          <Primary
            label="+ Add to library"
            buttonBorderRadius={{ borderRadius: "0px 0px 8px 8px" }}
            displayElement={{ display: displayAddToLibrary }}
            onClickHandler={() => onClickOfAddtoLibrary(book, book["id"])}
          />
          <LineProgressBar
            displayElement={{ display: displayProgressBar }}
            topHeight={{ top: "32px" }}
            progressValue={35}
          />
        </Box>
      </Grid>
    );
  }
  return (
    <>
      <div style={styles.padding}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Banner />
          <div
            style={{
              paddingTop: "58px",
              color: "#6D787E",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "30px",
              fontStyle: "normal",
            }}
          >
            {/* <SearchBar icon="search" /> */}
          </div>
          <Typography style={styles.title} pt={"80px"} pb={"25px"}>
            Trending Blinks
          </Typography>
          <Grid container columnSpacing={"3%"} data-testid="trendingBlinks">
            {blinksInfo &&
              blinksInfo
                .filter((book) => {
                  return book["isTrending"];
                })
                .map((book) => cardBuilder(book))}
          </Grid>
          <Typography style={styles.title} pb={"25px"} pt={"55px"}>
            Just Added
          </Typography>
          <Grid container columnSpacing={"1%"} data-testid="justAddedBlinks">
            {blinksInfo &&
              blinksInfo
                .filter((book) => {
                  return book["isJustAdded"];
                })
                .map((book) => cardBuilder(book))}
          </Grid>
          <Typography style={styles.title} pb={"25px"} pt={"55px"}>
            Featured Audio Books
          </Typography>
          <Grid container columnSpacing={"1%"} data-testid="featuredBlinks">
            {blinksInfo &&
              blinksInfo
                .filter((book) => {
                  return book["isFeatured"];
                })
                .map((book) => cardBuilder(book))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
export default Entrepreneurship;
