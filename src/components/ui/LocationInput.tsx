import { makeStyles, TextField, Theme } from '@material-ui/core'
import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';

interface SearchBarProps {
  onSearch(searchTerm: string): void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 25,
    width: 250,
  }
}))

export default function LocationInput ({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = React.useState('')

  const classes = useStyles()

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setSearchTerm(e.target.value)
  }

  return (
    <TextField
      value={searchTerm}
      onChange={handleSearchTermChange}
      onKeyPress={e => {
        if (e.key === 'Enter') onSearch(searchTerm)
      }}
      InputProps={{
        startAdornment: <LocationOnIcon style={{color: 'red'}}/>
      }}
      className={classes.root}
      variant="outlined"
    />
  )
}
