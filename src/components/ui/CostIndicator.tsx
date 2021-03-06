import { Typography, TypographyProps } from "@material-ui/core";

interface CostIndicatorProps extends TypographyProps {
  costIndication: number
  maxCost?: number
}

export default function CostIndicator ({costIndication, maxCost = 5, ...rest}: CostIndicatorProps) {

  return (
    <>
      <Typography color="textPrimary" display="inline" {...rest}>{"$".repeat(costIndication)}</Typography>
      <Typography color="textSecondary" display="inline" {...rest}>{"$".repeat(maxCost - costIndication)}</Typography>
    </>
  )
}
