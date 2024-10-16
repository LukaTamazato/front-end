
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Picklist from "../../../components/input/Picklist";
import { documentos, tiposContrato } from "../../../utils/dataMockUtil";
import { useState } from "react";

const TipoContrato = ({dadosDemanda, handleDadosChange}) => {

    const [documentoAtual, setDocumentoAtual] = useState(
        {
            id: "",
            value: "",
            documentosObrigatorios: []
        }
    )

    const [checked, setChecked] = useState({});

    const handleDocumentoChange = (e, name) => {
        const documentoAtual = tiposContrato.filter(contrato => contrato.id === e.target.value)[0];
        setDocumentoAtual(documentoAtual);

        e.target.value = documentoAtual;
        handleDadosChange(e, name);
    }

    const handleCheckboxChange = (id) => {
        setChecked((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
        <Grid display={"flex"} justifyContent={"center"} width="100%" size={12}>
            <Typography mb={2} mt={4} variant="h5" component="h5">Dados Cadastrais</Typography>
        </Grid>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"} gap={5}>
            <Grid width="90%" margin="auto" container columnSpacing={2}>
                <Picklist size={12} label={"Tipo de Contrato"} name={"tipoContrato"} value={dadosDemanda.tipoContrato} handleChange={handleDocumentoChange} items={tiposContrato} />
            </Grid>
            <FormGroup>
                <Grid width="85%" margin="auto" container columnSpacing={2}>
                    <Grid mb={3} size={12}>
                        <Typography variant="h6">Documentos Obrigatórios</Typography>
                    </Grid>
                    {(documentos && documentos.map((item, index) => {
                        const isObrigatorio = !!(documentoAtual.documentosObrigatorios.includes(item.id));
                        const isChecked = checked[item.id] || false; 

                        return (
                            <Grid size={{sm: 12, md: 6, lg: 4}} key={index}>
                            { isObrigatorio ? 
                                <FormControlLabel
                                    control={<Checkbox disabled checked/>}
                                    label={item.value}
                                />
                                :
                                <FormControlLabel
                                    control={<Checkbox checked={isChecked} onChange={() => handleCheckboxChange(item.id)} />}
                                    label={item.value}
                                />
                            }
                            </Grid> 
                        );
                    }))}
                </Grid>
            </FormGroup>
        </Box>
        </>
    );
}

export default TipoContrato;