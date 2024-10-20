import React, { useEffect, useState } from "react";
import { getUsuarios } from "../utils/dataMockUtil";
import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

const Parceiros = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Parceiros");
        setActions(null);
    }, [])

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setUsuarios(getUsuarios);
    }, [setUsuarios]);

    return (
        <Grid container spacing={3}>
            {usuarios && usuarios.map((usuario, index) => {
                return (
                    <Grid item size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} key={index}>
                        <CardUsuario usuario={usuario}/>
                    </Grid>
                );
            })}
        </Grid>
    )
}

const CardUsuario = (usuario) => {
    const user = usuario.usuario;

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={140}
                    image="https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2022/12/avatar3.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {user.nome}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {user.idade} anos
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {user.local}
                    </Typography>
                    <Stack mt={2}>
                        <Rating defaultValue={user.avaliacao} precision={0.5} readOnly/>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Parceiros;