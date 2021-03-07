import { Card, makeStyles, Theme, Grid, Button, CardMedia, CardActions, CardContent, Typography, Divider } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CostIndicator from '../ui/CostIndicator';
import { Rating } from '@material-ui/lab';
import { Restaurant } from '../../states/appSlice';

interface RestaurantCardProps {
  rank: number,
  restaurant: Restaurant,
}

const useStyles = makeStyles((theme: Theme) => ({
  smallText: {
    fontSize: 12,
  },
  infoText:{
    fontSize: 14,
  },
  root: {
    maxWidth: 500,
    margin: 'auto',
  },
}))

export default function RestaurantCard ({rank, restaurant}: RestaurantCardProps) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        style={{ height: 150 }}
        src="https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide%20C/O%20https://placeholder.com/"
      />
      <CardContent>
        <Grid container justify="space-between">
          <Grid xs={5}>
            <Typography variant="h6" color="primary" style={{fontWeight: 'bold'}}>{`${rank}. ${restaurant.name}`}</Typography>
            <Typography className={classes.smallText} >{restaurant.address}</Typography>
          </Grid>
          <Grid xs={1}>
            <Divider orientation="vertical" flexItem style={{ height: '80%', margin: 'auto' }}/>
          </Grid>
          <Grid xs={5} style={{textAlign: 'center'}}>
            <Typography><Rating precision={0.1} value={restaurant.averageRating} readOnly /></Typography>
            <Typography className={classes.smallText} >{restaurant.info.includes("\"currently_open\": true") ? 'Open Now' : 'Closed'}</Typography>
          </Grid>
          <Grid xs={12}>
            <Divider component="hr" style={{margin: 5}}/>
          </Grid>
          <Grid xs={3}>
            <Typography className={classes.infoText} style={{fontWeight: 'bolder'}}>COST:</Typography>
          </Grid>
          <Grid xs={9}>
            <Typography className={classes.infoText}><CostIndicator costIndication={restaurant.priceIndicator} /></Typography>
          </Grid>
          <Grid xs={3}>
            <Typography className={classes.infoText} style={{fontWeight: 'bolder'}}>HOURS:</Typography>
          </Grid>
          <Grid xs={9}>
            <Typography className={classes.infoText}>{restaurant.openHours}</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography className={classes.infoText} style={{fontWeight: 'bolder'}}>CUISINES:</Typography>
          </Grid>
          <Grid xs={9}>
            <Typography className={classes.infoText}>{restaurant.types}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained" disableElevation startIcon={<PhoneIcon />}>Call</Button>
        <Button variant="contained" disableElevation startIcon={<MenuBookIcon />}>View Menu</Button>
        <Button variant="contained" disableElevation style={{backgroundColor: "#FF3008", color: 'white'}}>DoorDash</Button>
      </CardActions>
    </Card>
  )
}
