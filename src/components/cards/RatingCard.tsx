import { Card, CardContent, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

interface RatingCardProps {
  service: string,
  rating: number,
  numberOfReviews: string,
}

export default function RatingCard({ service, rating, numberOfReviews}: RatingCardProps) {

  return (
    <Card style={{marginBottom: 25}}>
      <CardContent>
        <Typography display="inline">
          {service}
        </Typography>
        <Rating value={Number(rating)} readOnly />
        <Typography color="textSecondary" display="inline">
          {numberOfReviews}
        </Typography>
      </CardContent>
    </Card>
  )
}
