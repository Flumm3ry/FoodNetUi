import { makeStyles, TextField, Theme } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

interface SearchBarProps {
  onSearch(searchTerm: string): void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 25,
    marginRight: 25,
    width: 300,
  }
}))

export default function SearchBar ({ onSearch }: SearchBarProps) {
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
        startAdornment: <SearchIcon />
      }}
      className={classes.root}
      variant="outlined"
    />
  )
}
