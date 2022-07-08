import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./library.css";
import BookCards from "../../molecules/BookCard/BookCards";
import axios from "axios";
import Primary from "../../molecules/Buttons/Primary/Primary";
import LineProgressBar from "../../atoms/Icons/ProgressBar/LineProgressBar";
import PersonAvatar from "../../atoms/Icons/PersonAvatar/PersonAvatar.svg";
import { Link } from "react-router-dom";

interface BookProps {
  id: number;
  coverImage: string;
  title: string;
  author: string;
  state: string;
  isTrending: boolean;
  isJustAdded: boolean;
  isFeatured: boolean;
  personAvatar: string;
  readCount: string;
}
function Library() {
  let displayAvatar: any;
  const [value, setValue] = React.useState("1");
  const [blinksInfo, setBlinksInfo] = useState([]);
  const [blinkState, setBlinkState] = useState(false);
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/BooksInfo")
      .then((response) => {
        const data = response.data;
        setBlinksInfo(data);
      })
      .catch((error) => console.error("Error :", error));
  }, [blinkState]);
  function onClickOfFinished(book: BookProps, id: number) {
    axios
      .put(`http://localhost:8000/BooksInfo/${id}`, {
        ...book,
        state: "finished",
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
    setBlinkState(!blinkState);
  }
  function onClickOfReadAgain(book: BookProps, id: number) {
    axios
      .put(`http://localhost:8000/BooksInfo/${id}`, {
        ...book,
        state: "reading",
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
    setBlinkState(!blinkState);
  }
  function cardBuild(book: BookProps, progressVal: number, label: string,) {
    if (book["readCount"] === "") {
      displayAvatar = null;
    }
    else {
      displayAvatar = PersonAvatar;
    }
    let button;
    if (label === "Finished") {
      button = <Primary
        label={label}
        displayElement={{ display: "" }}
        buttonBorderRadius={{ borderRadius: "0px" }}
        onClickHandler={() =>
          onClickOfFinished(book, book["id"])
        } data-testid="finishedButtton"
      />
    } else {
      button =
        <Primary
          label={label}
          displayElement={{ display: "" }}
          buttonBorderRadius={{
            borderRadius: "0px",
          }}
          onClickHandler={() =>
            onClickOfReadAgain(book, book["id"])
          } data-testid="readAgainButton"
        />
    }
    return (
      <Grid item md={4} pb={"25px"} key={book["id"]} data-testid={`$book["id"]`} >
        <Box width={"300px"} data-testid={`$book["id"]`}>
          <Link to={`/Entrepreneurship/${book["id"]}`} style={{ textDecoration: "none" }}>

            <BookCards
              img={book["coverImage"]}
              title={book["title"]}
              author={book["author"]}
              readTime={"13-minutes read"}
              increasedHeight="310px"
              readCount={book["readCount"]}
              personAvatar={displayAvatar}
            />
          </Link>

          {button}
          <LineProgressBar
            displayElement={{ display: "" }}
            progressValue={progressVal}
            topHeight={{ top: "0px" }} data-testid="bar"
          />
        </Box>
      </Grid>
    );
  }
  const styles = {
    heading: {
      fontFamily: "CeraProBold",
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: 700,
    },
    sample: {
      fontFamily: 'CeraProMedium'

    },
    link: {
      textDecoration: "none",
      color: "#6D787E",
      fontFamily: "Cera Pro",
      borderBottom: "2px solid grey",
      paddingRight: "10%",
    },
    tabs: {
      "&.MuiButtonBase-root.MuiTab-root": {
        backgroundColor: "yellow",
      },
    },
  };
  return (
    <>
      <div style={{ padding: "100px 17.97% 111px 18.33%" }}>
        <Typography style={styles.heading} pb={"48px"}>
          My Library
        </Typography>
        <Box sx={{ width: "100%" }} data-testid="box">
          <TabContext value={value} >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <span style={{ color: "#22C870x" }}>
                <TabList
                  onChange={handleChange}
                  textColor={"secondary"}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "rgba(44, 224, 128, 1)",
                      width: "304px"
                    },
                  }}
                >
                  <Tab
                    label="Currently Reading"
                    value="1"
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "CeraProLight",
                      fontWeight: "700",
                      fontSize: "18px",
                      width: "304px",
                      alignItems: "flex-start",
                      paddingLeft: "0px"
                    }}
                  />
                  <Tab
                    label="Finished"
                    value="2"
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "CeraProLight",
                      fontWeight: "700",
                      fontSize: "18px",
                      alignItems: "flex-start",
                      paddingLeft: "0px"
                    }}
                  />
                </TabList>
              </span>
            </Box>
            <TabPanel value="1" sx={{ paddingLeft: "0px", paddingRight: "0px" }} data-testid="panel1">
              <Grid container columnSpacing={"4%"} data-testid="contatiner1">
                {blinksInfo
                  .filter((book) => {
                    if (book["readCount"] === "") {
                      displayAvatar = null;
                    }
                    else {
                      displayAvatar = PersonAvatar;
                    }
                    return book["state"] === "reading";
                  })
                  .map((book) => cardBuild(book, 35, "Finished"))
                }
              </Grid>
            </TabPanel>
            <TabPanel value="2" sx={{ paddingLeft: "0px", paddingRight: "0px" }} data-testid="panel2">
              <Grid container columnSpacing={"4%"} data-testid="contatiner2">
                {blinksInfo
                  .filter((book) => {
                    return book["state"] === "finished";
                  })
                  .map((book) => cardBuild(book, 100, "Read Again"))}
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
export default Library;