import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Link, Typography } from "@mui/material";
import { VscMilestone } from "react-icons/vsc";

function Milestones({ milestones }) {
  return (
    <Box>
      <Timeline position="alternate">
        {milestones.map((milestone, index) => (
          <TimelineItem key={`${milestone.title}_${index}`}>
            <TimelineOppositeContent
              sx={{ display: { xs: "none", sm: "block" } }}
            />
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  ...(index % 2 !== 0 && {
                    transform: "scaleX(-1)",
                  }),
                }}
              >
                <VscMilestone />
              </TimelineDot>
              <TimelineConnector sx={{ mb: 5 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 5 }}>
              <Box px={1}>
                <Typography fontWeight="bold">{milestone.date}</Typography>
                <Typography>{milestone.description}</Typography>
                <Link href={milestone.url}>Learn more</Link>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default Milestones;
