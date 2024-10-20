import dayjs from "dayjs";

export const aplicarMascara = (valor, mascara) => {
    if (!mascara || typeof valor === 'number') return valor;
    
    let valorNovo = valor;

    switch (mascara) {
        case 'numeroPositivo':
                valorNovo = valorNovo
                    .replace(/\D/g, '')
                    .replace('-', '')
            break;
        case 'telefone':
                valorNovo = valorNovo
                    .replace(/\D/g, '')
                    .slice(0, 11)
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{4})(\d)/, '$1-$2')
                    .replace(/(\d{4})(\d)/, '$1');
            break;
        case 'celular':
                valorNovo = valorNovo
                    .replace(/\D/g, '')
                    .slice(0, 11)
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{4})(\d)/, '$1-$2')
                    .replace(/(\d{5})(\d)/, '$1');
            break;
        case 'cpf':
                valorNovo = valorNovo
                    .replace(/\D/g, '')
                    .slice(0, 11)
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{2})$/, '$1-$2');
            break;
        case 'rg':
                valorNovo = valorNovo
                    .replace(/\D/g, '')
                    .slice(0, 9)
                    .replace(/(\d{2})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1})$/, '$1-$2');
            break;
        case 'cep':
                valorNovo = valorNovo
                    .replace(/\D/g, '')
                    .slice(0, 8)
                    .replace(/(\d{5})(\d{3})/, '$1-$2');
            break;
        case 'dinheiro':

            valorNovo = valorNovo.replace(/\D/g, '');
            valorNovo = ((valorNovo/100).toFixed(2) + '')
                                .replace(".", ",")
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

            break;
        case 'dataNascimento': {
            if (!valorNovo.includes('-')) break;
            
            const [ano, mes, dia] = valorNovo.split('-');
            valorNovo = [dia, mes, ano].join('/');
            break;
        }
        default:
            valorNovo = valor;
            break;
    }
    
    return valorNovo;
};

export const formatarObjetos = (objs) => {
    objs.forEach(obj => {
        Object.keys(obj).forEach((key) => {
            const valorNovo = aplicarMascara(obj[key], key)
            obj[key] = valorNovo;
        })
    });
}

export const formatarCardDemanda = (demandas) => {
    const demandasFmt = [];

    demandas.forEach((e) => {
        const date = dayjs(e.fim);
        demandasFmt.push({
            id: e.id,
            demanda: e.nome,
            date: {
                dia: date.date(),
                mes: numToMes(date.month())
            },
            endereco: `${e.logradouro}, ${e.numero}`
        })
    })

    return demandasFmt;
}

export const formatarCardEvento = (eventos) => {
    const eventosFmt = [];

    eventos.forEach((e) => {
        const date = dayjs(e.fim);
        eventosFmt.push({
            id: e.id,
            evento: e.nome,
            date: {
                dia: date.date(),
                mes: numToMes(date.month())
            },
            endereco: `${e.logradouro}, ${e.numero}`
        })
    })

    return eventosFmt;
}

export const numToMes = (n) => {
    switch (n) {
        case 0:
            return "JAN"
        case 1:
            return "FEV"
        case 2:
            return "MAR"
        case 3:
            return "ABR"
        case 4:
            return "MAI"
        case 5:
            return "JUN"
        case 6:
            return "JUL"
        case 7:
            return "AGO"
        case 8:
            return "SET"
        case 9:
            return "OUT"
        case 10:
            return "NOV"
        case 11:
            return "DEZ"
        default:
            break;
    }
}