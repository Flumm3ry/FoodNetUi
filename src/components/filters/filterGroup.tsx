import { Chip, Divider, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    width: '100%',
    textAlign: 'center',
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
    backgroundColor: `${theme.palette.grey[200]} !important`,
  },
  chipSelected: {
    backgroundColor: '#C0C0C0 !important',
  },
}))

interface FilterGroupProps {
  title: string,
  options: {
    label: string
    value: number
  }[],
  onFilterChange(selectedOption: number, action: 'add' | 'remove'): void,
  selectedOptions: number[],
}

export default function FilterGroup ({title, options, selectedOptions, onFilterChange}: FilterGroupProps) {
  const classes = useStyles()

  const handleChipClick = (value: number) => {
    if (selectedOptions.includes(value)) {
      onFilterChange(value, 'remove')
    } else {
      onFilterChange(value, 'add')
    }
  }

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Divider component="hr" />
      {options.map(o => (
        <Chip
          key={o.value}
          onClick={() => handleChipClick(o.value)}
          label={o.label}
          className={selectedOptions.includes(o.value) ? `${classes.chip} ${classes.chipSelected}` : classes.chip}
        />
      ))}
    </>
  )
}
