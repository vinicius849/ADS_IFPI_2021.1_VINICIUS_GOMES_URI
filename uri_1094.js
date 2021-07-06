const input = require('prompt-sync')()

function main(){
    let testes = Number(input('Informe a quantidade de testes: '))

    cobaias(testes)
}

function cobaias(t){
    let totalc = 0;
    let coelhos = 0;
    let sapos = 0;
    let ratos = 0;
    let qtdd = 0;
    let cobaia = '';

    for(let i = 0; i < t; i++{
        qtdd = Number(input(`Quantas cobaias foram utlizadas no teste ${i + 1}: `))
        cobaia = input('Qual tipo de cobaia foi utilizado? (C-coelho; R- rato; S-sapo) ');
        if (cobaia === 'S'|| cobaia === 's'){
            sapos += qtdd
        }else if(cobaia === 'R' || cobaia === 'r'){
            ratos += qtdd
        }else if(cobaia === 'C' || cobaia === 'c'){
            coelhos += qtdd
        }else{
            console.log('Cobaia informada inválida!')
        }
        totalc += qtdd;
    }

        console.log(`Total: ${totalc}\nTotal de coelhos: ${coelhos}\nTotal de ratos: ${ratos}\nTotal de sapos: ${sapos}`);
        console.log(`Percentual de coelhos: ${(coelhos/totalc * 100).toFixed.Fixed(2)}\nPercentual de ratos: ${(ratos/totalc * 100).toFixed(2)}%\nPercentual de sapos: ${sapos/totalc * 100).toFixed(2)}%`)
    }

main()