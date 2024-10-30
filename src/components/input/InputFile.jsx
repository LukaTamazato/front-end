import {
  Button,
  Chip,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadIcon from "@mui/icons-material/Upload";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const InputFile = ({
  size = { sm: 12, md: 6 },
  handleFileChange,
  handleDelete,
  imagem,
}) => {
  return (
    <Grid mt={2} size={size}>
      <TextField
        fullWidth
        label="Imagem"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment sx={{ width: "40%" }} position="end">
                {
                  <Button
                    sx={{ fontSize: 12 }}
                    variant="contained"
                    color="secondary"
                    component="label"
                    startIcon={<UploadIcon />}
                    disabled={!!imagem}
                  >
                    Procurar
                    <input
                      type="file"
                      hidden
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </Button>
                }
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment sx={{ width: "60%" }} position="start">
                {
                  <>
                    {imagem && (
                      <Chip
                        sx={{ textOverflow: "ellipsis" }}
                        onDelete={handleDelete}
                        label={imagem.name}
                      />
                    )}
                    {!imagem && (
                      <Typography fontSize={14}>Anexe uma imagem</Typography>
                    )}
                  </>
                }
              </InputAdornment>
            ),
          },
        }}
      ></TextField>
    </Grid>
  );
};

export default InputFile;
