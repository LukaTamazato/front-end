import axios from "axios";

export const logar = async (dados) => {
  try {
    const response = await axios.post("http://localhost:8080/usuarios/login", {
      email: dados.email,
      senha: dados.senha,
    });

    if (response.status !== 200) return;

    const { token, id, tipoUsuario } = response.data;

    sessionStorage.setItem("TOKEN", token);
    sessionStorage.setItem("ID", id);
    sessionStorage.setItem("tipoUsuario", tipoUsuario);

    return response.data;
  } catch (err) {
    console.log(err.response.status);
  }
};

export const cadastrar = async (request) => {
  try {
    const response = await axios.post(urlData + 'usuarios', request, {
      headers: {
        Authorization: `Bearer ${sessionStorage.TOKEN}`,
      },
    });

    return response;
  } catch (err) {
    return {
      error: true,
      message: err.response.data.message,
      data: err.response.data,
      status: err.response.status,
    };
  }
};