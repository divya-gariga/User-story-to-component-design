import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import GirlStudying from '../../atoms/Icons/GirlStudying/GirlStudying.svg'

function Banner() {
    const styles = {
        bannerBody: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '23px',
            color: 'grey',
            fontFamily: 'CeraProLight'
        }
    }
    return (
        <Grid container sx={{ backgroundColor: '#F1F6F4' }}>
            <Grid item md={9} xs={12}>
                <Stack direction="column" gap={2} p={2}>
                    <Typography variant="h1" component="h1">Explore books on entrepreneurship</Typography>
                    <Typography style={styles.bannerBody} sx={{ fontFamily: 'Cera Pro' }}>
                        Everything you need to know about thriving on a shoestring
                        budget, making your first million, and hiring right from the
                        start.
                    </Typography>
                </Stack>
            </Grid>
            <Grid item md={3} display={{ xs: 'none', md: 'block' }}>
                <img src={GirlStudying} />
            </Grid>
        </Grid>
    )
}
export default Banner