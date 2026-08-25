import { Box, Typography } from "@mui/material";
import { RefObject } from "react";

interface Props {
  title: string;
  subTitle?: string;
  scrollRef?: RefObject<HTMLDivElement | null>;
}

export default function ContentTitle(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      ref={props.scrollRef}
    >
      <Typography
        component={"h2"}
        sx={{ fontSize: "xx-large", pb: props.subTitle ? undefined : 3 }}
      >
        {props.title}
      </Typography>

      {props.subTitle && (
        <Typography sx={{ fontSize: "smaller", color: "gray", pb: 3 }}>
          {props.subTitle}
        </Typography>
      )}
    </Box>
  );
}
