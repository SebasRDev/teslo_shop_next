import { Box, CircularProgress } from "@mui/material";

export const FullScreenLoader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
      <CircularProgress thickness={2} />
    </Box>
  );
};
