import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
  background: string;
  noPadding?: boolean;
}

export default function ContentContainer(props: Props) {
  return (
    <Box
      sx={{
        px: { xs: 1.5, md: 15 },
        py: props.noPadding ? 0 : 5,
        background: props.background,
      }}
    >
      {props.children}
    </Box>
  );
}
