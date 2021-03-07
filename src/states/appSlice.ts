import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import Axios from 'axios'

const API_URL = "https://o2pyf6yarl.execute-api.ap-southeast-2.amazonaws.com/dev/restaurants"

export interface Restaurant {
  name: string,
  phone: string,
  address: string,
  types: string,
  info: string, // "{\"vegan\": 0, \"handicap_options\": 0, \"wifi\": 0, \"currently_open\": true, \"near_train\": 0, \"price_level\": \"\"}" will do
  priceIndicator: number,
  averageRating: number,
  openHours: string,
  ratings: Array<{
    service: string,
    rating: number,
    numberOfReviews: number,
  }>
}

interface State {
  restaurants: Restaurant[],
  searchedRestaurants: Restaurant[],
  filteredRestaurants: Restaurant[],
  sortCriteriaId: number,
  filters: number[],
  isLoading: boolean,
}

const initialState: State = {
  restaurants: [],
  searchedRestaurants: [],
  filteredRestaurants: [],
  filters: [],
  sortCriteriaId: 1,
  isLoading: false,
}

export const retrieveRestaurants = createAsyncThunk(
  'app/retrieve',
  async () => {
    const response = await Axios.get<Restaurant[]>(API_URL)
    return response.data
  },
)

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    searchRestaurants (state, { payload }: PayloadAction<{ searchTerm: string, locationId: number }>) {
      state.searchedRestaurants = state.restaurants.filter(r => r)
      state.filteredRestaurants = [...state.searchedRestaurants]
      state.sortCriteriaId = 1
      state.filters = []
    },
    updateSortCriteria (state, { payload }: PayloadAction< number | undefined >) {
      state.sortCriteriaId = payload ?? 1

      switch (state.sortCriteriaId) {
        case 1:
          state.filteredRestaurants = state.filteredRestaurants.sort()
          break
        case 2:
          state.filteredRestaurants = state.filteredRestaurants.sort((a, b) => a.averageRating - b.averageRating)
          break
        case 3:
          state.filteredRestaurants = state.filteredRestaurants.sort((a, b) => a.priceIndicator - b.priceIndicator)
          break
        case 4:
          state.filteredRestaurants = state.filteredRestaurants.sort((a, b) => b.priceIndicator - a.priceIndicator)
      }
    },
    updateFilter (state, { payload }: PayloadAction< { value: number, action: 'add' | 'remove' } >) {
      if (payload.action === 'add') state.filters.push(payload.value)
      else state.filters = state.filters.filter(id => id !== payload.value)

      state.filteredRestaurants = state.searchedRestaurants

      if (state.filters.includes(1) || state.filters.includes(2) || state.filters.includes(3)) {
        // PASS
      }
      if (state.filters.includes(4) || state.filters.includes(5) || state.filters.includes(6) || state.filters.includes(7)) {
        // PASS
      }
      if (state.filters.includes(8) || state.filters.includes(9) || state.filters.includes(10) || state.filters.includes(11) || state.filters.includes(12) || state.filters.includes(13) || state.filters.includes(14) || state.filters.includes(15)) {
        state.filteredRestaurants = state.filteredRestaurants.filter(r => (
          (!state.filters.includes(8) || r.info.includes("\"handicap_options\": 1")) &&
          (!state.filters.includes(9) || r.info.includes("\"vegan\": 1")) &&
          (!state.filters.includes(10) || r.info.includes("\"vegan\": 1")) &&
          (!state.filters.includes(11) || r.info.includes("gluten-free")) &&
          (!state.filters.includes(12) || r.info.includes("\"wifi\": 1")) &&
          (!state.filters.includes(13) || r.info.includes("serve alcohol")) &&
          (!state.filters.includes(14) || r.info.includes("\"currently_open\": true")) &&
          (!state.filters.includes(15) || r.info.includes("\"near_train\": 1"))
        ))
      }

      switch (state.sortCriteriaId) {
        case 1:
          state.filteredRestaurants = state.filteredRestaurants.sort()
          break
        case 2:
          state.filteredRestaurants = state.filteredRestaurants.sort((a, b) => a.averageRating - b.averageRating)
          break
        case 3:
          state.filteredRestaurants = state.filteredRestaurants.sort((a, b) => a.priceIndicator - b.priceIndicator)
          break
        case 4:
          state.filteredRestaurants = state.filteredRestaurants.sort((a, b) => b.priceIndicator - a.priceIndicator)
      }
    },
  },
  extraReducers: builder =>
    builder
      .addCase(retrieveRestaurants.fulfilled, (state, { payload }) => {
        state.restaurants = payload
        state.isLoading = false
      })
      .addCase(retrieveRestaurants.pending, (state) => {
        state.isLoading = true
      })
      .addCase(retrieveRestaurants.rejected, (state) => {
        state.restaurants = []
        state.isLoading = false
      })
})

export const { searchRestaurants, updateFilter, updateSortCriteria } = appSlice.actions
export default appSlice.reducer
