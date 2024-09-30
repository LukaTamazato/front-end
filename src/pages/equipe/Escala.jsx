import React from "react";
import Tabela from "../../components/tabela/Tabela";
import { Typography } from "@mui/material";
import Picklist from "../../components/input/Picklist";

const funcoesAlocacao = [
    'Atendentes de bar',
    'Repositores',
    'Carregadores',
    'Vigia noturno',
    'Limpeza',
    'Garçom',
    'Dosador',
    'Barback',
    'Líder de bar',
    'Coordenador',
    'RH',
    'Apoio de RH'
];

const columns = [
    { 
        field: 'id',
        headerName: 'ID',
        width: 90 
    },
    {
        field: 'firstName',
        headerName: 'Nome',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Sobrenome',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Idade',
        type: 'number',
        width: 120,
        editable: true,
    },
    {
        field: 'function',
        headerName: 'Função',
        width: 200,
        editable: true,
        renderEditCell: (params) => (
            <Picklist items={funcoesAlocacao} params={params} />
        ),
      },
    {
        field: 'scheduledTime',
        headerName: 'Horário escala',
        type: 'text',
        width: 200,
        editable: true,
    },
];

const rows = [
    {
        id: 1,
        firstName: 'João',
        lastName: 'Silva',
        age: 28,
        function: 'Atendentes de bar',
        scheduledTime: '25/09/2024 09:00'
    },
    {
        id: 2,
        firstName: 'Maria',
        lastName: 'Oliveira',
        age: 32,
        function: 'Repositores',
        scheduledTime: '25/09/2024 10:00'
    },
    {
        id: 3,
        firstName: 'Carlos',
        lastName: 'Santos',
        age: 45,
        function: 'Vigia noturno',
        scheduledTime: '25/09/2024 08:00'
    },
    {
        id: 4,
        firstName: 'Ana',
        lastName: 'Costa',
        age: 24,
        function: 'Limpeza',
        scheduledTime: '25/09/2024 11:00'
    },
    {
        id: 5,
        firstName: 'Pedro',
        lastName: 'Souza',
        age: 39,
        function: 'Garçom',
        scheduledTime: '25/09/2024 07:00'
    }
];


const Escala = () => {
    return (
        <>
            <Typography sx={{ mb: 4, mt: 2 }} variant="h4" component="h4">Título</Typography>
            <Tabela columns={columns} rows={rows} />
        </>
    )
}

export default Escala;