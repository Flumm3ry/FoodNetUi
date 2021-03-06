import { makeStyles, Theme, Grid, Typography, Box } from '@material-ui/core'
import Cards from '../../cards'
import Filters from '../../filters'
import Header from './../../Header'

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    display: 'inline-block'
  },
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: theme.palette.grey[200]
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Box className={classes.root}>
        <Grid container className={classes.root} justify="center">
          <Grid item xs={12}>
            <Typography variant="h4">
              Pasta Restaurants in Ballarat
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Filters />
          </Grid>
          <Grid item xs={10}>
            <Cards />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
