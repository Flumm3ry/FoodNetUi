import { Card, CardContent, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

interface RatingCardProps {
  service: string,
  rating: number,
  numberOfReviews: number,
}

export default function RatingCard({ service, rating, numberOfReviews}: RatingCardProps) {

  return (
    <Card>
      <CardContent>
        <Typography display="inline">
          {service}
        </Typography>
        <Rating value={rating} />
        <Typography color="textSecondary" display="inline">
          {`${numberOfReviews} reviews`}
        </Typography>
      </CardContent>
    </Card>
  )
}
