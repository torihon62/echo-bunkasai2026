import { Box, Typography } from "@mui/material";

interface Props {
  messages: string[];
  isLeft?: boolean;
}

export default function About(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: props.isLeft
          ? "flex-start"
          : { xs: "flex-start", md: "center" },
      }}
    >
      {props.messages.map((message, i) =>
        message === "" ? (
          <br key={`about-message_${i}`} />
        ) : (
          <Typography key={`about-message_${i}`} sx={{ lineHeight: "2.3" }}>
            {message}
          </Typography>
        )
      )}
    </Box>
  );
}
