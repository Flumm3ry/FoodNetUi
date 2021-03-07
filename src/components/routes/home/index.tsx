import { makeStyles, Theme, Grid, Typography, Box, CircularProgress } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveRestaurants } from '../../../states/appSlice'
import { RootState } from '../../../states/store'
import Cards from '../../cards'
import Filters from '../../filters'
import Header from './../../Header'

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    display: 'inline-block'
  },
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: theme.palette.grey[200]
  }
}))

const Home = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { searchTerm, searchedLocation, isLoading } = useSelector((state: RootState) => state)

  React.useEffect(() => {
    dispatch(retrieveRestaurants())
  }, [dispatch])

  return (
    <>
      {isLoading ? (
        <CircularProgress color="primary" style={{ margin: 'auto' }}/>
      ) : (
        <>
          <Header />
          <Box className={classes.root}>
            <Grid container justify="center">
              { (searchTerm && searchedLocation) && (
                <>
                  <Grid item xs={12}>
                    <Typography variant="h4" style={{ paddingBottom: 15 }}>
                      {`'${searchTerm}' places in '${searchedLocation}'`}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Filters />
                  </Grid>
                  <Grid item xs={10}>
                    <Cards />
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </>
      )}
    </>
  )
}

export default Home
