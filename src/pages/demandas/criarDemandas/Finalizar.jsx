import { Button, InputAdornment, TextField } from "@mui/material";
import { useCallback, useEffect } from "react";

const Finalizar = ({dadosDemanda, setDadosDemanda}) => {
        
    const calcularTotal = () => {
        let total = 0;
        dadosDemanda.vagas.forEach(vaga => {
            total += Number(vaga.valor.replace(',','.')) * vaga.qtdColaborador;
        });
        setDadosDemanda(prevDados => ({ ...prevDados, custoTotal: total }));
    }

    useEffect(() => {
        calcularTotal();
    }, [])

    return (
        <>
        <CampoTexto label="Custo Total" startAdornment="R$" value={(dadosDemanda.custoTotal + "").replace('.',',')}/>
        </>
    );
}

export default Finalizar;

const CampoTexto = ({label, value, startAdornment}) => {
    return (
        <TextField
        slotProps={{
            input: {
                startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null
            }
        }}
        label={label} 
        value={value} 
        variant="standard" 
        disabled
        />
    );
}