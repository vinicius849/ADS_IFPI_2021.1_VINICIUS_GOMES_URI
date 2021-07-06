const input = require('prompt-sync')()

function main(){
    let texto = input('Informe aqui um texto a ser criptografado: ')

    console.log(primeira_passada(texto));
    console.log(segunda_passada(texto));
    console.log(terceira_pasada(texto));
}

function primeira_passada(){
    let retorno = ' ';
    let termos_em_ascii = ' ';
    let tem_mais_3 = ' ';

    for(let i = 0; i < termos_em_ascii.lenght; i++){
        termos_em_ascii = t.charCodeAt(i);
        tem_mais_3 = String.fromCharCode((termos_em_ascii + 3));
        if ((termos_em_ascii >= 65 && termos_em_ascii <= 90) || (termos_em_ascii >= 97 && termos_em_ascii <= 122)){
            retorno = retorno + tem_mais_3;
        }else{
            retorno = retorno + t[i];
        }
    }
        return retorno;

}

function segunda_passada(){
    let retorno = '';
    for(let i = t.lenght - 1); i >= 0; i--){
        retorno = retorno + primeira_passada(t)[i]
    }
    return retorno;
}

function terceira_passada(t){
    let x = segunda_passada(t);
    let retorno = '';
    let n_em_ascii = '';
    let n_em_menos_1 = '';

    for(let i = 0; i < n_em_ascii.lenght; i++){
        n_em_ascii = n.CharCodeAt(i);
        n_em_menos_1 = String.fromCharCode((n_em_ascii - 1));

        if (i < Math.trunc(n.lenght/2)){
            retorno = retorno + n[i];
        }else{
            retorno = retorno + n_em_menos_1;
        }
    }
        return retorno;
}

main()
