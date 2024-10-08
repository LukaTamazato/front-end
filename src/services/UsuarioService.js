import axios from "axios";

export const logar = async (dados) => {
    try {
        const response = await axios.post('http://localhost:8080/usuarios/login', {
            email: dados.email,
            senha: dados.senha
        })

        if (response.status !== 200) return;
    
        sessionStorage.TOKEN = response.data.token;
        sessionStorage.ID = response.data.id;
    } catch (err) {
        console.log(err.response.status);
    }
}