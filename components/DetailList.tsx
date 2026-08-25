import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  title?: string;
  href?: string;
  link?: string;
  summarys: {
    subHeader: string;
    contents: string[];
  }[];
  noMargin?: boolean;
  headerUnderline?: boolean;
}

export default function DetailList(props: Props) {
  return (
    <Box>
      {props.title && (
        <Typography
          sx={{
            textDecoration: props.headerUnderline ? "underline" : undefined,
            textUnderlineOffset: 2,
            fontWeight: "bold",
            fontSize: "larger",
          }}
        >
          {props.title}
        </Typography>
      )}

      {props.summarys.map((summary, i) => (
        <Box
          key={`workshop-content-summary_${i}`}
          sx={{ ml: props.noMargin ? 0 : 2 }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "large",
              pt: 2,
              pb: 0.5,
            }}
          >
            {summary.subHeader}
          </Typography>
          {summary.contents.map((content, j) => (
            <Typography
              key={`workshop-content-summary_${i}-content_${j}`}
              sx={{ ml: props.noMargin ? 1 : 1 }}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></Typography>
          ))}
        </Box>
      ))}
      {props.href !== undefined && props.link !== undefined && (
        <Box sx={{ ml: props.noMargin ? 0 : 2 }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "large", pt: 2, pb: 0.5 }}
          >
            詳細 URL
          </Typography>
          <Typography sx={{ ml: props.noMargin ? 0 : 1 }}>
            <Link href={props.href} target="_blank">
              {props.link}
            </Link>
          </Typography>
        </Box>
      )}
    </Box>
  );
}
