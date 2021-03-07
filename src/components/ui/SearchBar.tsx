import { makeStyles, TextField, Theme } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

interface SearchBarProps {
  onSearch(): void
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  searchTerm: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 25,
    marginRight: 25,
    width: 350,
  }
}))

export default function SearchBar ({ onSearch, onChange, searchTerm }: SearchBarProps) {
  const classes = useStyles()

  return (
    <TextField
      value={searchTerm}
      onChange={onChange}
      onKeyPress={e => {
        if (e.key === 'Enter') onSearch()
      }}
      InputProps={{
        startAdornment: <SearchIcon />
      }}
      className={classes.root}
      variant="outlined"
      placeholder="...Desserts (Search for a cuisine or dish)"
    />
  )
}
