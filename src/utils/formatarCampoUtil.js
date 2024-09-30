export const aplicarMascara = (valor, mascara) => {
    if (!mascara) return valor;
    
    let valorNovo = valor.replace(/\D/g, '');

    switch (mascara) {
        case 'telefone':
                valorNovo = valorNovo
                    .slice(0, 11)
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{4})(\d)/, '$1-$2')
                    .replace(/(\d{4})(\d)/, '$1');
            break;
        case 'celular':
                valorNovo = valorNovo
                    .slice(0, 11)
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{4})(\d)/, '$1-$2')
                    .replace(/(\d{5})(\d)/, '$1');
            break;
        case 'cpf':
                valorNovo = valorNovo
                    .slice(0, 11)
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{2})$/, '$1-$2');
            break;
        case 'rg':
                valorNovo = valorNovo
                    .slice(0, 9)
                    .replace(/(\d{2})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1})$/, '$1-$2');
            break;
        default:
            break;
    }
    
    return valorNovo;
};