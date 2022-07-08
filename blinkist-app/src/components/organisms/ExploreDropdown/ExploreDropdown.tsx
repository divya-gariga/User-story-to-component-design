import { Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import './ExploreDropdown.css'
import { ExploreByCategory } from '../../../data/data'
import { Link } from 'react-router-dom'
const styles = {
    title: {
        fontFamily: 'CeraProMedium',
        fontStyle: 'normal',
        color: '#6D787E',
        fontsize: '16px',
        fontWeight: '600',
        lineHeight: '16px'
    },
    highlightedTitle: {
        fontFamily: 'CeraProMedium',
        fontStyle: 'normal',
        color: '#116BE9',
        fontsize: '16px',
        fontWeight: '700',
        lineHeight: '20px'
    },
    subtitle: {
        fontFamily: 'CeraProMedium',
        color: '#6D787E',
        fontsize: '16px',
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: '20px',
    }
}
function ExploreDropdown() {
    return (
        <Container style={{
            maxWidth: "100%",
            backgroundColor: '#F1F6F4',
            position: 'absolute', top: '86px', left: 0, right: 0, zIndex: '1'
        }}>
            <Grid container sx={{ background: '#F1F6F4', display: 'flex', justifyContent: 'space-between', marginTop: "30px", marginBottom: "24px", padding: "0px 17.36%" }}>
                <Grid item  ><Typography style={styles.highlightedTitle}>Explore by category</Typography></Grid>
                <Grid item ><Typography style={styles.title}>See recently added titles</Typography></Grid>
                <Grid item><Typography style={styles.title}>See popular titles</Typography>   </Grid>
            </Grid>
            <div style={{ borderTop: "2px solid black ", marginLeft: "17.36%", marginRight: "17.36%" }}></div>
            <Grid container sx={{
                background: '#F1F6F4', display: 'flex',
                flexDirection: 'row', paddingLeft: '17.36%', marginTop: "32px", justifyContent: "space-between"
            }}>
                {
                    ExploreByCategory.map((item) => {
                        return (
                            <Grid item key={item.name} md={4} xs={12} sm={6} style={styles.subtitle} mb={"28px"}>
                                <Stack direction="row" alignItems="center" >
                                    <Link to={item.link} className="link">
                                        <item.icon style={{ paddingRight: '5px' }} />
                                        <span style={{ verticalAlign: "top" }}>{item.name}</span>
                                    </Link>
                                </Stack>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container >
    )
}
export default ExploreDropdown