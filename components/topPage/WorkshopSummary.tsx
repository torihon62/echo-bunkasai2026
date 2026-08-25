import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  title?: string;
  href?: string;
  link?: string;
  summaries: string[];
}

export default function WorkshopSummary(props: Props) {
  return (
    <Box>
      {props.title && (
        <Typography sx={{ fontWeight: "bold", fontSize: "larger", py: 2 }}>
          {props.title}
        </Typography>
      )}

      {props.summaries.map((summary, i) => (
        <Box key={`workshop-content-summary_${i}`}>
          {summary === "" && <br />}
          {summary !== "" && <Typography>{summary}</Typography>}
        </Box>
      ))}
      {props.href !== undefined && props.link !== undefined && (
        <Box>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "large", pt: 2, pb: 0.5 }}
          >
            詳細 URL
          </Typography>
          <Typography sx={{ ml: 1 }}>
            <Link href={props.href} target="_blank">
              {props.link}
            </Link>
          </Typography>
        </Box>
      )}
    </Box>
  );
}
