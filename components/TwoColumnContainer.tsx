import { Grid } from "@mui/material";

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
  leftSize?: number;
  rightSize?: number;
}

export default function TwoColumnContainer(props: Props) {
  return (
    <Grid columnSpacing={5} container>
      <Grid size={{ xs: 12, md: props.leftSize ? props.leftSize : 6 }}>
        {props.left}
      </Grid>
      <Grid size={{ xs: 12, md: props.rightSize ? props.rightSize : 6 }}>
        {props.right}
      </Grid>
    </Grid>
  );
}
