import { useSelector } from 'react-redux'
import { RootState } from '../../states/store'
import RestaurantListing from './RestaurantListing'

export default function Cards () {
  const { filteredRestaurants } = useSelector((state: RootState) => state)

  return (
    <>
      {filteredRestaurants.map((r, i) => (
        <RestaurantListing
          key={r.name}
          rank={i + 1}
          restaurant={r}
        />
      ))}
    </>
  )
}
