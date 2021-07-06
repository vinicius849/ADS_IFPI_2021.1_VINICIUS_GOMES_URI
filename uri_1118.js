const input = require('prompt-sync')()

function main(){
    let codigo =1;
    while(codigo === 1){
        let nota_1 = Number(input('Informe aqui a primeira nota: '));

        while(nota_1 < 1 || nota_1 > 10){
            console.log('Nota informada inválida!')
            nota_1 = Number(input('Por favor informe um valor válido para a primeira nota: '))
        }
        let nota_2 = Number(input('Informe a segunda nota: '))

        while(nota_2 < 1 || nota_2 > 10){
            console.log('Nota informada inválida!');
            nota_2 = Number(input('Por favor informe uma nota válida para essa nota: '))
        }

        console.log(`Média = ${(nota_1 + nota_2) / 2}`);
        codigo = Number(input('Novo cálculo? (1-Sim) e (2-Não) '));

    }
}

main()
