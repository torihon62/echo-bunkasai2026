import { Box } from "@mui/material";
import ResponsiveImage from "../ResponsiveImage";
import { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  aspectRatio: string;
}

export default function WorkshopImage(props: Props) {
  return (
    <Box sx={{ minHeight: "150px" }}>
      <ResponsiveImage
        style={{ borderRadius: "20px" }}
        image={props.image}
        alt=""
        aspectRatio={props.aspectRatio}
      />
    </Box>
  );
}
