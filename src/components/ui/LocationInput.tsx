import { makeStyles, TextField, Theme } from '@material-ui/core'
import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';

interface SearchBarProps {
  onSearch(): void
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  searchTerm: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 25,
    width: 300,
  }
}))

export default function LocationInput ({ onSearch, onChange, searchTerm }: SearchBarProps) {
  const classes = useStyles()

  return (
    <TextField
      value={searchTerm}
      onChange={onChange}
      onKeyPress={e => {
        if (e.key === 'Enter') onSearch()
      }}
      InputProps={{
        startAdornment: <LocationOnIcon style={{color: 'red'}}/>
      }}
      className={classes.root}
      variant="outlined"
      placeholder="Enter your location"
    />
  )
}
