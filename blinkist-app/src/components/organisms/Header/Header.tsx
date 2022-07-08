import { Typography, Grid, AppBar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../atoms/Icons/BlinkistLogo/BlinkistLogo.svg";
import Search from "../../atoms/Icons/Search/Search.svg";
import Login from "../../atoms/Icons/Login/Login.svg";
import DownArrow from "../../atoms/Icons/DownArrow/DownArrow.svg";
import UpArrow from "../../atoms/Icons/UpArrow/UpArrow.svg";
import { Link } from "react-router-dom";
import "./header.css";
import ExploreDropdown from "../ExploreDropdown/ExploreDropdown";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Modal from "../../molecules/Modal/Modal";
import DropDownComponent from "../../molecules/SearchDropdown/SearchDropdown";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [makeSearchBarVisible, setSearchBarVisibility] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  function handleInput(inputText: string) {
    setSearchText(inputText)
  }
  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const styles = {
    link: {
      textDecoration: "none",
      color: "black",
    },
    title: {
      fontFamily: "CeraProMedium",
      color: "black",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20.11px",
    },
  };
  function toggleSearchBar() {
    if (makeSearchBarVisible == true) setSearchBarVisibility(false);
    else setSearchBarVisibility(true);
    open ? setOpen(false) : setOpen(true);

  }
  return (
    <>
      <div>
        <AppBar sx={{ backgroundColor: "white"}} elevation={0}>
          <Grid container className='navbar-container'>
            <Grid item className='navbar-blinkist-logo'>
              <img alt="blinkist" src={Logo} />
            </Grid>
            <Grid item className='navbar-magnifying-icon'>
              <img
                alt="search"
                src={Search}
                style={{ width: "20.31px", height: "20.31px" }}
                onClick={() => {
                  toggleSearchBar();
                  handleOpen();
                }}
              />
            </Grid>

            {makeSearchBarVisible === true ? (
              <Grid item pt={"30px"} pb={"40px"} sx={{ flexGrow: 1 }}>
                <SearchBar icon="" onInput={handleInput} onClick={()=>toggleSearchBar()}/>
                {/* <div style={{position:"absolute",top:"10%"}}> */}
                  <Modal open={open} DropDownComponent={DropDownComponent} searchTerm={searchText} />
                {/* </div> */}
              </Grid>
            ) : (
              <>
                <Grid
                  item
                  pt={"33px"}
                  pb={"33px"}
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                  onMouseLeave={() => {
                    setDropdown(false);
                  }}
                >
                  <span className="hover" data-testid="dropdown">
                    <Typography
                      component="span"
                      paddingRight={"6.7px"}
                      style={styles.title}
                    >
                      Explore
                    </Typography>
                    {dropdown ? (
                      <img
                        src={DownArrow}
                        style={{ width: "10.61px", height: "6.48px" }}
                      />
                    ) : (
                      <img
                        src={UpArrow}
                        style={{ width: "10.61px", height: "6.48px" }}
                      />
                    )}
                    {dropdown && <ExploreDropdown />}
                  </span>
                </Grid>
                <Grid item p={"33px 0 33px 2.82%"} sx={{ flexGrow: 1 }}>
                  <Typography style={styles.title}>
                    <Link to="/" style={styles.link} className="hover">
                      My Library
                    </Link>
                  </Typography>
                </Grid>
              </>
            )}
            <Grid item mr={"270px"} pt={"33px"}  >
              <Typography component="span" pr={1} style={styles.title}>Account</Typography>
              <img src={UpArrow} style={{ width: "10.61px", height: "6.48px" }} />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    </>
  );
}

export default Header;
