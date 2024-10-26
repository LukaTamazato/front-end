export const funcoesAlocacao = [
        {id: 0, value: "Atendentes de bar"},
        {id: 1, value: "Repositores"},
        {id: 2, value: "Carregadores"},
        {id: 3, value: "Vigia noturno"},
        {id: 4, value: "Limpeza"},
        {id: 5, value: "Garçom"},
        {id: 6, value: "Dosador"},
        {id: 7, value: "Barback"},
        {id: 8, value: "Líder de bar"},
        {id: 9, value: "Coordenador"},
        {id: 10, value: "RH"},
        {id: 11, value: "Apoio de RH"}
];

export const colaboradores = [
    {id: 0, nome: "Senhor Nome da Silva0", celular: "19998527362", cpf: "10020030080", dataNascimento: "1994-02-01", cidade: "São Paulo", uf: "SP"},
    {id: 1, nome: "Senhor Nome da Silva1", celular: "19998527363", cpf: "10020030081", dataNascimento: "1994-02-02", cidade: "São Paulo", uf: "SP"},
    {id: 2, nome: "Senhor Nome da Silva2", celular: "19998527364", cpf: "10020030082", dataNascimento: "1994-02-03", cidade: "São Paulo", uf: "SP"},
    {id: 3, nome: "Senhor Nome da Silva3", celular: "19998527365", cpf: "10020030083", dataNascimento: "1994-02-04", cidade: "São Paulo", uf: "SP"},
    {id: 4, nome: "Senhor Nome da Silva4", celular: "19998527366", cpf: "10020030084", dataNascimento: "1994-02-05", cidade: "São Paulo", uf: "SP"},
    {id: 5, nome: "Senhor Nome da Silva5", celular: "19998527367", cpf: "10020030085", dataNascimento: "1994-02-06", cidade: "São Paulo", uf: "SP"},
    {id: 6, nome: "Senhor Nome da Silva6", celular: "19998527368", cpf: "10020030086", dataNascimento: "1994-02-07", cidade: "São Paulo", uf: "SP"},
    {id: 7, nome: "Senhor Nome da Silva7", celular: "19998527369", cpf: "10020030087", dataNascimento: "1994-02-08", cidade: "São Paulo", uf: "SP"},
    {id: 8, nome: "Senhor Nome da Silva8", celular: "199985273610", cpf: "10020030088", dataNascimento: "1994-02-09", cidade: "São Paulo", uf: "SP"},
    {id: 9, nome: "Senhor Nome da Silva9", celular: "199985273611", cpf: "10020030089", dataNascimento: "1994-02-10", cidade: "São Paulo", uf: "SP"}
];

export const tiposContrato = [
    {id: 0, value: "Freelancer", documentosObrigatorios: [0, 1, 5]},
    {id: 1, value: "Contrato intermitente", documentosObrigatorios: [0, 5, 7, 3]},
    {id: 2, value: "Contrato temporário", documentosObrigatorios: [0, 5, 7]},
    {id: 3, value: "Terceirizado", documentosObrigatorios: [0, 5]}
]

export const documentos = [
    {id: 0, value: "CPF"},
    {id: 1, value: "RG"},
    {id: 2, value: "CNH"},
    {id: 3, value: "CTPS"},
    {id: 4, value: "Comprovante Residência"},
    {id: 5, value: "ASO"},
    {id: 6, value: "Reservista"},
    {id: 7, value: "Contrato"}
]

export const eventos = [
    {id: "0", nome: "Evento A"},
    {id: "1", nome: "Evento B"},
    {id: "2", nome: "Evento C"},
    {id: "3", nome: "Evento D"},
    {id: "4", nome: "Evento E"},
    {id: "5", nome: "Evento F"}
]

export const getFormularios = [
    {id: "0", nome: "Formulário A", url: "https://forms.com/0"},
    {id: "1", nome: "Formulário B", url: "https://forms.com/1"},
    {id: "2", nome: "Formulário C", url: "https://forms.com/2"},
    {id: "3", nome: "Formulário D", url: "https://forms.com/3"},
    {id: "4", nome: "Formulário E", url: "https://forms.com/4"},
    {id: "5", nome: "Formulário F", url: "https://forms.com/5"}
]

export const getUsuarios = [
    {id: "055da5e3-b29a-4a29-a83f-b54f543d196f", nome: "Usuário 1", avaliacao: 4.5, idade: 31, local: "Itaquera"},
    {id: "000000000000000000000000000000000055", nome: "Usuário 2", avaliacao: 5, idade: 34, local: "Itaquera"},
    {id: "000000000000000000000000000000000056", nome: "Usuário 3", avaliacao: 2.5, idade: 23, local: "Itaquera"},
    {id: "000000000000000000000000000000000057", nome: "Usuário 4", avaliacao: 3.5, idade: 50, local: "Itaquera"},
    {id: "000000000000000000000000000000000058", nome: "Usuário 5", avaliacao: 4, idade: 20, local: "Itaquera"},
    {id: "000000000000000000000000000000000059", nome: "Usuário 6", avaliacao: 3, idade: 37, local: "Itaquera"},
    {id: "000000000000000000000000000000000060", nome: "Usuário 7", avaliacao: 4.5, idade: 31, local: "Itaquera"},
    {id: "000000000000000000000000000000000061", nome: "Usuário 8", avaliacao: 5, idade: 34, local: "Itaquera"},
    {id: "000000000000000000000000000000000062", nome: "Usuário 9", avaliacao: 2.5, idade: 23, local: "Itaquera"},
    {id: "000000000000000000000000000000000063", nome: "Usuário 10", avaliacao: 3.5, idade: 50, local: "Itaquera"},
    {id: "000000000000000000000000000000000064", nome: "Usuário 11", avaliacao: 4, idade: 20, local: "Itaquera"},
    {id: "000000000000000000000000000000000065", nome: "Usuário 12", avaliacao: 3, idade: 37, local: "Itaquera"}
];




export const getDemandas = [
    {
        id: 0,
        nome: "Demanda A",
        inicio: "2024-10-11",
        fim: "2024-10-21",
        custoTotal: 20000.00,
        tipoContrato: "Freelancer",
        evento: "Evento A"
    },
    {
        id: 1,
        nome: "Demanda B",
        inicio: "2024-10-12",
        fim: "2024-10-22",
        custoTotal: 30000.00,
        tipoContrato: "Contrato intermitente",
        evento: "Evento A"
    },
    {
        id: 2,
        nome: "Demanda C",
        inicio: "2024-10-13",
        fim: "2024-10-23",
        custoTotal: 40000.00,
        tipoContrato: "Contrato temporário",
        evento: "Evento B"
    },
    {
        id: 3,
        nome: "Demanda D",
        inicio: "2024-10-14",
        fim: "2024-10-24",
        custoTotal: 50000.00,
        tipoContrato: "Terceirizado",
        evento: "Evento B"
    },
    {
        id: 4,
        nome: "Demanda E",
        inicio: "2024-10-15",
        fim: "2024-10-25",
        custoTotal: 60000.00,
        tipoContrato: "Freelancer",
        evento: "Evento B"
    },
    {
        id: 5,
        nome: "Demanda F",
        inicio: "2024-10-16",
        fim: "2024-10-26",
        custoTotal: 70000.00,
        tipoContrato: "Contrato temporário",
        evento: "Evento C"
    },
]

export const getEventos = [
    {
        id: 0,
        nome: "Evento A",
        inicio: "01/05/2024",
        fim: "01/06/2020",
        orcamento: 10000.0,
        logradouro: "Avenida das Ameixeiras"
    },
    {
        id: 1,
        nome: "Evento B",
        inicio: "01/06/2024",
        fim: "01/07/2020",
        orcamento: 20000.0,
        logradouro: "Avenida das Ameixeiras"
    },
    {
        id: 2,
        nome: "Evento C",
        inicio: "01/07/2024",
        fim: "01/08/2020",
        orcamento: 30000.0,
        logradouro: "Avenida das Ameixeiras"
    },
    {
        id: 3,
        nome: "Evento D",
        inicio: "01/08/2024",
        fim: "01/09/2020",
        orcamento: 40000.0,
        logradouro: "Avenida das Ameixeiras"
    },
    {
        id: 4,
        nome: "Evento E",
        inicio: "01/09/2024",
        fim: "01/010/2020",
        orcamento: 50000.0,
        logradouro: "Avenida das Ameixeiras"
    },
]
