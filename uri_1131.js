const input = require('prompt-sync')()

function main(){
    let codigo = 1;
    let selecoes = 0;
    let vflamengo = 0;
    let vvasco = 0;
    let empates = 0;
    let gol_1 = 0;
    let gol_2 = 0;
}

main()

    while(codigo === 1){
        gol_1 = Number(input('Digite aqui quantos gols o Flamengo marcou num CLÁSSICO: '));
        gol_2 = Number(input('Digite aqui quantos gols o Vasco marcou no CLÁSSICO: '));
    }
    if (gol_1 > gol_2){
        vflamengo++
    }else if (gol_2 > gol_1){
        vvasco++
    }else{
        empates++
    }
    selecoes++

    codigo = Number(input('Novo Clássico:(1-Sim; 2-Não): '));
    }

    console.log(`Total de clássicos: ${selecoes}\nVitórias do Flamengo: ${vflamengo}\nVitórias do Vasco: ${vvasco}\nEmpates: ${empates}`);

    if (vflamengo > vvasco){
        console.log('Se o Flamengo obter mais gols que o Vasco entre os clássicos!');
    }else if (vvasco > vflamengo){
        console.log('Se o Vasco obter mais gols que o Flamengo entre os clássicos!');
    }else{
        console.log('Não houve vencedor!');
    }
    }

}

main()

    
