import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  image: StaticImageData;
  alt: string;
  aspectRatio: string;
  style?: React.CSSProperties;
}
export default function ResponsiveImage(props: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: props.aspectRatio,
      }}
    >
      <Image
        style={{ ...props.style }}
        src={props.image}
        alt={props.alt}
        fill
      />
    </Box>
  );
}
