
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

    const [documentosAdicionados, setDocumentosAdicionados] = useState([]);

    const handleDocumentoChange = (e, name) => {
        const documento = tiposContrato.find(contrato => contrato.id === e.target.value);
        setDocumentoAtual(documento);

        e.target.value = documento;
        handleDadosChange(e, name);
    }

    const adicionarDocumento = (idDocumento) => {
        setDocumentosAdicionados((prevState) => {
            return (
                prevState.includes(idDocumento)
                ? prevState.filter((doc) => doc !== idDocumento)
                : [...prevState, idDocumento]
            );
        });

        const documentos = dadosDemanda.documentosAdicionados.includes(idDocumento) 
                            ? dadosDemanda.documentosAdicionados.filter((doc) => doc !== idDocumento)
                            : [...dadosDemanda.documentosAdicionados, idDocumento];

        const e = {target: { value: documentos}};
        handleDadosChange(e, 'documentosAdicionados');
    };

    return (
        <>
        <Grid display={"flex"} justifyContent={"center"} width="100%" size={12}>
            <Typography mb={2} mt={4} variant="h5" component="h5">Dados Cadastrais</Typography>
        </Grid>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"} gap={5}>
            <Grid width="90%" margin="auto" container columnSpacing={2}>
                <Picklist size={12} label={"Tipo de Contrato"} name={"tipoContrato"} value={documentoAtual.id} handleChange={handleDocumentoChange} items={tiposContrato} />
            </Grid>
            <FormGroup>
                <Grid width="85%" margin="auto" container columnSpacing={2}>
                    <Grid mb={3} size={12}>
                        <Typography variant="h6">Documentos Obrigatórios</Typography>
                    </Grid>
                    {(documentos && documentos.map((item, index) => {
                        return (
                            <Grid size={{sm: 12, md: 6, lg: 4}} key={index}>
                            { documentoAtual.documentosObrigatorios.includes(item.id) 
                                ? 
                                <FormControlLabel
                                    control={<Checkbox disabled checked/>}
                                    label={item.value}
                                />
                                :
                                <FormControlLabel
                                    control={<Checkbox checked={documentosAdicionados.includes(item.id) || false} onChange={() => adicionarDocumento(item.id)} />}
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