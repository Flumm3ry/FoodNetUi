import { Grid } from "@material-ui/core";
import RestaurantCard from './RestaurantCard'

export default function RestaurantListing () {

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <RestaurantCard />
      </Grid>
      <Grid item xs={6}>
        Ratings here
      </Grid>
    </Grid>
  )
}
