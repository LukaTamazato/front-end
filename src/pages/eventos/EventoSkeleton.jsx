import { Box, Skeleton, Tab, Typography } from "@mui/material";
import OutlinedBox from "../../components/box/OutlinedBox";

const EventoSkeleton = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box gap={10} className="flexRowStart" alignItems={"flex-end"} mb={2}>
          <Box className="flexColumn">
            <Skeleton width={100} height={30} />
            <Skeleton width={300} height={40} />
          </Box>
          <Box gap={5} className="flexRowCenter">
            <Box className="flexColumn">
              <Skeleton width={120} height={20} />
              <Skeleton width={150} height={30} />
            </Box>
            <Box className="flexColumn">
              <Skeleton width={120} height={20} />
              <Skeleton width={150} height={30} />
            </Box>
            <Box className="flexColumn">
              <Skeleton width={120} height={20} />
              <Skeleton width={150} height={30} />
            </Box>
            <Box className="flexColumn">
              <Skeleton width={120} height={20} />
              <Skeleton width={150} height={30} />
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap={2} alignItems="center">
          <Skeleton variant="rounded" width={80} height={30} />
          <Skeleton variant="rounded" width={80} height={30} />
        </Box>
      </Box>

      <Box mt={5} mb={5} display="flex" gap={10}>
        <Skeleton variant="rectangular" width={200} height={200} />
        <Skeleton variant="rectangular" width={200} height={200} />
        <Skeleton variant="rectangular" width={200} height={200} />
        <Skeleton variant="rectangular" width={200} height={200} />
      </Box>

      <Tab disableRipple label={<Skeleton width={80} />} />
      <Tab disableRipple label={<Skeleton width={80} />} />
      <Tab disableRipple label={<Skeleton width={80} />} />

      <OutlinedBox>
        <Typography mb={5} variant="h6">
          <Skeleton width="20%" />
        </Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <Box className="flexRowBetween">
            <Skeleton width="40%" height={20} />
            <Skeleton width="40%" height={20} />
          </Box>
          <Box className="flexRowBetween">
            <Skeleton width="40%" height={20} />
            <Skeleton width="40%" height={20} />
          </Box>
          <Box className="flexRowBetween">
            <Skeleton width="40%" height={20} />
            <Skeleton width="40%" height={20} />
          </Box>
          <Box mb={1} className="flexRowBetween">
            <Skeleton width="40%" height={20} />
            <Skeleton width="40%" height={20} />
          </Box>
        </Box>
      </OutlinedBox>
    </Box>
  );
};

export default EventoSkeleton;
