import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

interface RatingCardProps {
  service: string,
  rating: number,
  numberOfReviews: string,
}

export default function RatingCard({ service, rating, numberOfReviews}: RatingCardProps) {

  return (
    <Card style={{ marginBottom: 25, maxWidth: 425 }}>
      <CardContent style={{verticalAlign: 'middle'}}>
        <Box display="inline-block">
          <Typography display="inline" variant="h6">
            {service}
          </Typography>
          <Typography color="textSecondary" variant="body1" display="block">
            {numberOfReviews}
          </Typography>
        </Box>
        <Box display="inline-block" style={{marginLeft: 10}}>
          <Rating value={Number(rating)} size="large" readOnly precision={0.1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </Box>
      </CardContent>
    </Card>
  )
}
