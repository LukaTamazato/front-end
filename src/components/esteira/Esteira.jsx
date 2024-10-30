import { Box, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useTheme } from "@emotion/react";
const Esteira = ({ step, setStep, labels }) => {
  const handleClick = (novaStep) => {
    if (Math.abs(step - novaStep) !== 1) return;
    setStep(novaStep);
  };

  return (
    <Box display={"flex"} mb={5} gap={1}>
      {labels.map((label, i) => (
        <span
          key={i}
          style={{
            cursor: i >= step - 1 && i <= step + 1 ? "pointer" : "default",
            borderRadius: "50%",
          }}
        >
          <EsteiraItem
            label={label}
            handleClick={handleClick}
            step={step}
            atual={i}
            ativo={step >= i}
          />
        </span>
      ))}
    </Box>
  );
};

const EsteiraItem = ({ ativo, atual, step, handleClick, label }) => {
  const theme = useTheme();

  return (
    <Box display={"flex"} alignItems={"center"}>
      {atual !== 0 && (
        <Line color={ativo ? theme.palette.secondary.light : "#e1e1e1"} />
      )}
      <Box
        position={"relative"}
        display={"flex"}
        width={30}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {atual === step ? (
          <CircleIcon
            onClick={() => {
              handleClick(atual);
            }}
            sx={[
              {
                transition: "300ms",
                fontSize: 40,
                color: theme.palette.secondary.main,
              },
              { "&:hover": { color: theme.palette.secondary.dark } },
            ]}
          />
        ) : (
          <CircleIcon
            onClick={() => {
              handleClick(atual);
            }}
            sx={[
              {
                transition: "300ms",
                fontSize: 40,
                color: ativo ? theme.palette.secondary.light : "#e1e1e1",
              },
              {
                "&:hover": {
                  color: ativo ? theme.palette.secondary.light : "#eaeaea",
                },
              },
            ]}
          />
        )}
        <Typography
          sx={{ width: 200 }}
          mt={5}
          ml={20}
          position={"absolute"}
          color={atual === step ? "black" : "gray"}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default Esteira;

const Line = ({ color }) => {
  return (
    <Box mr={2}>
      <svg width="100" height="8">
        <line x1="0" y1="4" x2="100" y2="4" stroke={color} strokeWidth="4" />
      </svg>
    </Box>
  );
};
