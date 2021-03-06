import { AppBar, makeStyles, Theme, Box, Typography } from '@material-ui/core'
import SearchBar from './SearchBar'
import LocationInput from './LocationInput'


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '60vh',
    textAlign: 'center',
    backgroundImage: "url(/background.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  text: {
    color: 'white',
  },
  logoBox: {
    paddingTop: 180,
  }
}))

export default function Header () {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root} elevation={0}>
      <Box className={classes.logoBox}>
        <img src="icon.png" style={{ paddingBottom: 88, paddingRight: 10 }} alt="Logo icon" />
        <img src="logo.png" alt="Logo"/>
      </Box>
      <Box>
        <Typography display="inline" className={classes.text} variant="h4">Discover the best</Typography>
        <SearchBar onSearch={ () => undefined } />
        <Typography display="inline" className={classes.text} variant="h4">in</Typography>
        <LocationInput onSearch={ () => undefined } />
      </Box>
    </AppBar>
  )
}
