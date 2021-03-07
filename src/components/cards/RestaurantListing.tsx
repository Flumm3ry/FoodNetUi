import { Grid } from "@material-ui/core";
import { Restaurant } from "../../states/appSlice";
import RestaurantCard from './RestaurantCard'
import RatingCard from './RatingCard'

interface RestaurantListingProps {
  rank: number,
  restaurant: Restaurant,
}

export default function RestaurantListing ({ rank, restaurant }: RestaurantListingProps) {

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <RestaurantCard
          rank={rank}
          restaurant={restaurant}
        />
      </Grid>
      <Grid item xs={6}>
        {restaurant.ratings.map(r => (
          <RatingCard
            key={r.service}
            service={r.service}
            rating={r.rating}
            numberOfReviews={r.numberOfReviews}
          />
        ))}
      </Grid>
    </Grid>
  )
}
