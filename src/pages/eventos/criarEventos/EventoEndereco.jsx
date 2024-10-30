import { Typography, TextField, Autocomplete, Grid2 } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CampoTexto from "../../../components/input/CampoTexto";
import axios from "axios";

const estados = [
  { id: "AC", value: "Acre" },
  { id: "AL", value: "Alagoas" },
  { id: "AP", value: "Amapá" },
  { id: "AM", value: "Amazonas" },
  { id: "BA", value: "Bahia" },
  { id: "CE", value: "Ceará" },
  { id: "DF", value: "Distrito Federal" },
  { id: "ES", value: "Espírito Santo" },
  { id: "GO", value: "Goiás" },
  { id: "MA", value: "Maranhão" },
  { id: "MT", value: "Mato Grosso" },
  { id: "MS", value: "Mato Grosso do Sul" },
  { id: "MG", value: "Minas Gerais" },
  { id: "PA", value: "Pará" },
  { id: "PB", value: "Paraíba" },
  { id: "PR", value: "Paraná" },
  { id: "PE", value: "Pernambuco" },
  { id: "PI", value: "Piauí" },
  { id: "RJ", value: "Rio de Janeiro" },
  { id: "RN", value: "Rio Grande do Norte" },
  { id: "RS", value: "Rio Grande do Sul" },
  { id: "RR", value: "Roraima" },
  { id: "SC", value: "Santa Catarina" },
  { id: "SP", value: "São Paulo" },
  { id: "SE", value: "Sergipe" },
  { id: "TO", value: "Tocantins" },
];

const EventoEndereco = ({
  handleEnderecoChange,
  handleUfChange,
  dadosEvento,
  handleViaCEPResponse,
}) => {
  const handleViaCEP = async (e, name) => {
    handleEnderecoChange(e, name);

    if (e.target.value.length !== 9) return;

    const response = await axios.get(
      `https://viacep.com.br/ws/${e.target.value}/json/`
    );

    if (response.data.erro) return;

    const enderecoChange = {
      logradouro: response.data.logradouro,
      uf: response.data.uf,
      cidade: response.data.localidade,
    };

    handleViaCEPResponse(enderecoChange);
  };

  return (
    <>
      <Grid
        mb={2}
        mt={6}
        display={"flex"}
        justifyContent={"center"}
        width="100%"
        size={12}
      >
        <Typography variant="h5" component="h5">
          Dados do Evento
        </Typography>
      </Grid>
      <Grid width="80%" margin="auto" container columnSpacing={2}>
        <CampoTexto
          size={12}
          handleChange={handleEnderecoChange}
          value={dadosEvento.endereco?.logradouro}
          name="logradouro"
          label="Logradouro"
        />
        <CampoTexto
          handleChange={handleViaCEP}
          value={dadosEvento.endereco?.cep}
          name="cep"
          mascara="cep"
          regex={/^\d{5}-\d{3}$/}
          label="CEP"
        />
        <CampoTexto
          handleChange={handleEnderecoChange}
          value={dadosEvento.endereco?.numero}
          mascara="numeroPositivo"
          name="numero"
          label="Número"
        />
        <CampoTexto
          handleChange={handleEnderecoChange}
          value={dadosEvento.endereco?.cidade}
          name="cidade"
          label="Cidade"
        />
        <Grid2 size={6} mt={2}>
          <Autocomplete
            disablePortal
            options={estados}
            getOptionLabel={(option) => option.value}
            value={
              estados.find(
                (estado) => estado.id === dadosEvento.endereco?.uf
              ) || null
            }
            onChange={handleUfChange}
            renderInput={(params) => <TextField {...params} label="Estado" />}
          />
        </Grid2>
      </Grid>
    </>
  );
};

export default EventoEndereco;
