const input = require('prompt-sync')()

function main(){
    let nota_1 = Number(input('Digite aqi a primeira nota: '));
    
    while (nota_1 < 1 || nota_1  > 10){
        console.log('Nota informada inválida!')
    nota_1 = Number(input('Digite uma nota válida para nota de curso: '));
    }

    let nota_2 = Number(input('Digite aqui a segunda nota: '));

    while(nota_2 < 1 || nota_2 > 10){
        console.log('Nota informada inválida!')
        nota_2 = Number(input('Por favor, digite uma nota válida para curso: '));
    }

    console.log(`Média = ${(nota_1 + nota_2) / 2}`);

}

main()