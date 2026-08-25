/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";

interface Props {
  imageSource: string;
}

export default function SectionDevider(props: Props) {
  return (
    <Box>
      <img src={props.imageSource} className="w-full" height="600" alt="" />
    </Box>
  );
}
