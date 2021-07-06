const prompt = require('prompt-sync')()

function calcular_consumo_viagem(tempo, velocidade){
    const distancia = tempo * velocidade
    const consumo = distancia / 12

    return consumo
}

function principal(){
    console.log('##### Consumo Veículo #####')

    // Entrada
    const tempo = Number(prompt('Digite aqui o valor do tempo em horas: '))
    const velocidade = Number(prompt('Digite aqui o valor da velocidade(km/h): '))

    // Processamento
    const consumo = calcular_consumo_viagem(tempo, velocidade)

    // Saída
    console.log((consumo).toFixed(3))
}

principal()