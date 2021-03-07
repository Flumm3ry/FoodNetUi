import { AppBar, makeStyles, Theme, Box, Typography } from '@material-ui/core'
import SearchBar from './ui/SearchBar'
import LocationInput from './ui/LocationInput'
import React from 'react'
import { searchRestaurants } from '../states/appSlice'
import { useDispatch } from 'react-redux'


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '60vh',
    textAlign: 'center',
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: 'relative'
  },
  text: {
    color: 'white',
  },
  logoBox: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  }
}))

export default function Header () {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [ searchTerm, setSearchTerm ] = React.useState('')
  const [ searchLocation, setSearchLocation ] = React.useState('')

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setSearchTerm(e.target.value)
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setSearchLocation(e.target.value)
  }

  const handleSearch = () => {
    dispatch(searchRestaurants({searchTerm, location: searchLocation}))
  }

  return (
    <AppBar position="static" className={classes.root} elevation={0}>
      <Box className={classes.logoBox}>
        <Typography display="inline" className={classes.text} variant="h4">Discover the best</Typography>
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} onChange={handleSearchTermChange} />
        <Typography display="inline" className={classes.text} variant="h4">in</Typography>
        <LocationInput onSearch={handleSearch} searchTerm={searchLocation} onChange={handleLocationChange} />
      </Box>
    </AppBar>
  )
}
