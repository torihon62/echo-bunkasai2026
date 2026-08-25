import { Box, Typography } from "@mui/material";

interface Props {
  comments: string[];
  noTopPadding?: boolean;
}

export default function PerformerComment(props: Props) {
  return (
    <Box>
      <Typography
        sx={{
          textDecoration: "underline",
          textUnderlineOffset: 2,
          fontWeight: "bold",
          fontSize: "larger",
          pt: props.noTopPadding ? 0 : 3,
          pb: 1,
        }}
      >
        コメント
      </Typography>

      {props.comments.map((comment, i) => (
        <Box key={`workshop-content-comment_${i}_${comment}`}>
          {comment === "" && <br />}
          {comment !== "" && <Typography sx={{ ml: 1 }}>{comment}</Typography>}
        </Box>
      ))}
    </Box>
  );
}
