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
        case 'dataNascimento':
                if (!valorNovo.includes('-')) break;
                
                const [ano, mes, dia] = valorNovo.split('-');
                valorNovo = [dia, mes, ano].join('/');
            break;
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