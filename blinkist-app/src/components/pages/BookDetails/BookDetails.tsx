import { Box, Button, Grid, Table, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Time } from "../../atoms/Icons/icons/icons";
import Secondary from '../../molecules/Buttons/Secondary/Secondary';
import GreenButton from '../../molecules/Buttons/GreenButton/GreenButton';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useParams } from 'react-router';
import Modal from '@mui/material/Modal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

import './bookDetails.css'
interface book {
    id: Number;
    coverImage: string;
    title: string;
    author: string;
    state: string;
    isTrending: boolean;
    isJustAdded: boolean;
    isFeatured: boolean;
    readCount: string;
}
function BookDetails() {
    const { id } = useParams<{ id?: string }>();
    const [value, setValue] = React.useState('1');
    const [blinksInfo, setBlinksInfo] = useState<book>({} as book);
    const [blinkState, setBlinkState] = useState(false);
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const [open, setOpen] = React.useState(false);
    const [sendToKindle, setSendToKindle] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const style = {
        position: 'relative' as 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        pt: 2,
        pr: 4,
        pb: 2,
        pl: 3,
        alignContent: "center"
    };

    const styles = {
        padding: {
            padding: "100px 18.33% 76px 18.33%",
        },
        header: {
            font: "CeraPro",
            fontWeight: "700",
            fontSize: "36px",
            lineWeight: "45px"
        },
        img: {
            float: "right"
        },
        subtitle5: {
            fontFamily: "CeraProLight",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "25px",
            fontStyle: "normal"
        },
        body1: {
            fontFamily: "CeraProLight",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px"
        },
        caption3: {
            fontFamily: "CeraProLight",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "17px"
        }
    }
    function onClickOfFinished() {
        axios.put(`http://localhost:8000/BooksInfo/2`, {
            ...blinksInfo,
            "state": "finished"
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        setBlinkState(!blinkState)
    }
    async function getBookInfoById(id: Number) {
        await axios
            .get("http://localhost:8000/BooksInfo/" + id)
            .then((response) => {
                const data = response.data;
                console.log(data)
                setBlinksInfo(data);
            })
    }
    useEffect(() => {
        getBookInfoById(Number(id));
    }, []);
    return (
        <>
            <Box style={styles.padding}>
                <Typography>Get the key ideas from</Typography>
                <Grid container >
                    <Grid item md={8}>
                        <Typography variant='h5' style={styles.header} py={2}>
                            {blinksInfo["title"]}
                        </Typography>
                        <Typography style={styles.subtitle5}> Leverage the Three Pillars of positivity to Build Your success</Typography>
                        <Typography style={styles.body1} py={2}>{blinksInfo["author"]}</Typography>
                        <div style={{ display: "flex", justifyContent: "flex-start", paddingBottom: "5px" }}>
                            <span style={{ paddingRight: "5px" }}> <Time /></span>
                            <Typography style={styles.caption3}>15-minute read</Typography></div>
                        <div style={{ padding: '3%' }}>
                            <Secondary label="Read now" onClickHandler={function (_arg1: any): void {
                                throw new Error('Function not implemented.');
                            }} /><span style={{ paddingLeft: '3%' }}>
                                <Secondary label="Finished Reading" onClickHandler={onClickOfFinished} /></span>
                            <Typography variant="body1" component="span" onClick={handleOpen} className="send-to-kindle-button">Send to Kindle <ArrowForwardIcon className='arrow-icon' /></Typography>
                        </div>
                    </Grid>
                    <Grid item md={4} sx={{ justifyContent: "flex-end" }} alignItems="center"
                        justifyContent="center">
                        <img src={blinksInfo["coverImage"]} alt='cover image' height={"296px"} width={"296px"} />
                    </Grid>
                </Grid>
                <Box sx={{ width: '70%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} textColor={'inherit'} TabIndicatorProps={{
                                style: {
                                    backgroundColor: "rgba(44, 224, 128, 1)"
                                }
                            }} aria-label="lab API tabs example">
                                <Tab label="Synopsis" value="1" sx={{ textTransform: "none", fontFamily: "CeraProMedium" }} />
                                <Tab label="Who is it for?" value="2" sx={{ textTransform: "none", fontFamily: "CeraProMedium" }} />
                                <Tab label="About the author" value="3" sx={{ textTransform: "none", fontFamily: "CeraProMedium" }} />
                            </TabList>
                        </Box>
                        <TabPanel value="1" >
                            Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook,
                            Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines
                            the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case
                            studies pertinent to today’s business world.
                        </TabPanel>
                        <TabPanel value="2">
                            Beyond Entrepreneurship 2.0 is not for everyone. If you are the following types of people, you may like the book:
                            Office drones looking for a career change,
                            Founders of start-ups unsure where to start,
                            Entrepreneurs who want to scale up their businesses
                        </TabPanel>
                        <TabPanel value="3">
                            Bill Lazier was a Stanford professor of business and a pioneering entrepreneur.
                            In addition, he mentored Jim Collins, who is now a sought-after consultant and best-selling
                            author of leadership books
                            including Good to Great and Built to Last. Lazier and Collins coauthored
                            Beyond Entrepreneurship.                         </TabPanel>
                    </TabContext>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >{(sendToKindle === false) ?
                    (<Box sx={style} >
                        <CloseIcon sx={{ color: "#828894", fontSize: "large" }} onClick={handleClose} />
                        <Typography variant="h1" component="h2">
                            Set up your kindle
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Send blinks right to your kindle from within the app</Typography>
                        <Typography variant="body1" py={2}>1. Add Blinkist to your approved document senders</Typography>
                        <Typography variant="body2">
                            You must add kindle@blinkist.com to your list of approved document senders
                            to receive documents sent from Blinkist
                        </Typography>
                        <Typography variant="body1" pt={2}>2. Add your Kindle email</Typography>
                        <table style={{ borderSpacing: "0px", borderCollapse: "collapse", marginTop: "10px", marginBottom: "10px" }}>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder="email" style={{ "maxWidth": "140px", "border": "1px solid black", "padding": "10px" }} />
                                </td>
                                <td>
                                    <input type="text" placeholder="@kindle.com" style={{ "maxWidth": "140px", "border": "1px solid black", "padding": "10px" }}>
                                    </input>
                                </td>
                            </tr>
                        </table>
                        <div style={{ "display": "flex", "alignItems": "center" }}>
                            <GreenButton label={"Add email"}
                                buttonBorderRadius={{ borderRadius: "0px 0px 0px 0px" }}
                                displayElement={{ display: "none" }} onClickHandler={() => setSendToKindle(true)} />
                        </div>
                        <Typography textAlign={"center"} padding={2} >Need help?</Typography>
                    </Box>) : (<Box sx={style}>
                        <CloseIcon sx={{ color: "#828894", fontSize: "large" }} onClick={handleClose} />
                        <CheckCircleOutlineIcon sx={{ "fontSize": "70px", "textAlign": "center", color: "#2CE080", width: "100%" }} />
                        <Typography variant="h1"><Typography color="#116BE9" component="span" variant="h1" id="book-title">{blinksInfo["title"]}</Typography> was successfully sent to your kindle</Typography>
                        <Typography variant="body2" p={2}>Next time you sync your Kindle the blinks will be waiting for you.
                            Please be patient they can be slow travelers!
                        </Typography>
                        <GreenButton label={'Continue Reading'} buttonBorderRadius={{ borderRadius: "0px 0px 0px 0px" }}
                            displayElement={{ display: "none" }} onClickHandler={handleClose} />
                    </Box>)
                    }
                </Modal>


            </Box >
        </>
    )
}

export default BookDetails;