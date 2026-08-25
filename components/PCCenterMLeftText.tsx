import { Box, SxProps, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
  sx?: SxProps;
}

export default function PCCenterMLeftText(props: Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography sx={{ ...props.sx }}>{props.children}</Typography>
    </Box>
  );
}
