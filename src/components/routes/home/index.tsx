import { makeStyles, Theme, Grid, Typography, Box } from '@material-ui/core'
import Filters from '../../filters'
import Header from './../../Header'

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    display: 'inline-block'
  },
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Box className={classes.root}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Pasta Restaurants in Ballarat
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Filters />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
