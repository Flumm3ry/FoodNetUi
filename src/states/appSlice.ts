import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
  restaurants: string[],
  searchedRestaurants: string[],
  sortCriteriaId?: number,
  filters: number[],
}

const initialState: State = {
  restaurants: [],
  searchedRestaurants: [],
  filters: [],
}

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    searchRestaurants (state, { payload }: PayloadAction<{ searchTerm: string, locationId: number }>) {
      state.searchedRestaurants = state.restaurants.filter(r => r)
      state.sortCriteriaId = undefined
      state.filters = []
    },
    updateSortCriteria (state, { payload }: PayloadAction< number | undefined >) {
      state.sortCriteriaId = payload
      // TODO: USE SORT CRITERIA
    },
    updateFilter (state, { payload }: PayloadAction< { value: number, action: 'add' | 'remove' } >) {
      if (payload.action === 'add') state.filters.push(payload.value)
      else state.filters = state.filters.filter(id => id !== payload.value)
      // TODO: FILTER BY FILTERS
    },
  }
})

export const { searchRestaurants, updateFilter, updateSortCriteria } = appSlice.actions
export default appSlice.reducer
