import { makeStyles, Theme, Box, Typography, Divider } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { updateFilter, updateSortCriteria } from "../../states/appSlice"
import { RootState } from "../../states/store"
import FilterGroup from "./filterGroup"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: 5,
    backgroundColor: 'white',
  }
}))

const sortByFilters = [
  {
    label: "Popularity - high to low",
    value: 1,
  },
  {
    label: "Rating - high to low",
    value: 2,
  },
  {
    label: "Cost - high to low",
    value: 3,
  },
  {
    label: "Cost - low to high",
    value: 4,
  },
]

export default function Filters () {
  const { filters, sortCriteriaId } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const classes = useStyles()

  const handleUpdateSortCriteria = (selectedOption: number, action: 'add' | 'remove') => {
    if (action === 'add') dispatch(updateSortCriteria(selectedOption))
    else dispatch(updateSortCriteria(undefined))
  }

  const handleUpdateFilters = (selectedOption: number, action: 'add' | 'remove') => {
    dispatch(updateFilter({ value: selectedOption, action}))
  }

  return (
    <Box className={classes.root}>
      <Typography variant="h6">
        Filters
      </Typography>
      <Divider component="hr" />
      <FilterGroup
        title="Sort By"
        options={sortByFilters}
        onFilterChange={handleUpdateSortCriteria}
        selectedOptions={sortCriteriaId ? [sortCriteriaId] : []}
      />
      <FilterGroup
        title="Category"
        options={[
          {
            label: "Dine in - 12",
            value: 1,
          },
          {
            label: "Delivery - 8",
            value: 2,
          },
          {
            label: "Takeaway - 10",
            value: 3,
          },
        ]}
        selectedOptions={filters}
        onFilterChange={handleUpdateFilters}
      />
      <FilterGroup
        title="Atmosphere"
        options={[
          {
            label: "Casual dining - 9",
            value: 4,
          },
          {
            label: "Wine Bar - 5",
            value: 5,
          },
          {
            label: "Fine Dining - 4",
            value: 6,
          },
          {
            label: "Cafe - 6",
            value: 7,
          },
        ]}
        selectedOptions={filters}
        onFilterChange={handleUpdateFilters}
      />
      <FilterGroup
        title="Extra Filters"
        options={[
          {
            label: "Handicap Accessible - 6",
            value: 8,
          },
          {
            label: "Vegetarian Options - 8",
            value: 9,
          },
          {
            label: "Vegan Options - 6",
            value: 10,
          },
          {
            label: "Gluten-Free - 4",
            value: 11,
          },
          {
            label: "Free Wi-Fi - 7",
            value: 12,
          },
          {
            label: "Serve Alcohol - 8",
            value: 13,
          },
          {
            label: "Open right now - 12",
            value: 14,
          },
          {
            label: "Close to Public Transport - 7",
            value: 15,
          },
        ]}
        selectedOptions={filters}
        onFilterChange={handleUpdateFilters}
      />
    </Box>
  )
}
