import { Box } from "@mui/material";

const Imagem = ({ imagem, placeholder }) => {
  return (
    <Box
      component="img"
      sx={{
        height: "100%",
        maxHeight: 200,
        width: "auto",
        borderRadius: 2,
        boxShadow: 3,
        margin: 3,
      }}
      src={imagem ? imagem.url : placeholder}
    />
  );
};

export default Imagem;
