import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import { useCallback, useEffect } from "react";

const Finalizar = ({dadosEvento, setDadosEvento}) => {

    return (
        <Grid mt={4} rowSpacing={2} columnSpacing={8} container width={"100%"}>
            <Grid size={12}><Typography component={"h5"} variant="h5">Revisão</Typography></Grid>
            <CampoTexto size={12} label="Nome" value={dadosEvento.nome}/>
            <CampoTexto label="Responsável" value={dadosEvento.responsavel}/>
            <CampoTexto startAdornment={"R$"} label="Orçamento" value={dadosEvento.orcamento}/>
            <CampoTexto label="Início" value={dayjs(dadosEvento.inicio).format('DD/MM/YYYY HH:mm')}/>
            <CampoTexto label="Fim" value={dayjs(dadosEvento.fim).format('DD/MM/YYYY HH:mm')}/>
            <CampoTexto label="Formulário" value={dadosEvento.idFormulario}/>
            <CampoTexto label="Logradouro" value={dadosEvento.endereco.logradouro}/>
            <CampoTexto label="CEP" value={dadosEvento.endereco.cep}/>
            <CampoTexto label="Número" value={dadosEvento.endereco.numero}/>
            <CampoTexto label="Estado" value={dadosEvento.endereco.uf}/>
            <CampoTexto label="Cidade" value={dadosEvento.endereco.cidade}/>
        </Grid>
    );
}

export default Finalizar;

const CampoTexto = ({label, value, startAdornment, size={sm: 12, md: 6}}) => {
    return (
        <Grid size={size}>
            <TextField
            fullWidth
            slotProps={{
                input: {
                    startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null,
                    readOnly: true
                }
            }}
            label={label} 
            value={value} 
            variant="standard"
            onChange={(e) => e.preventDefault()}
            />
        </Grid>
    );
}