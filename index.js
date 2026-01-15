const nomeHeroi = "Steve"
let quantidadeXp = 6543
let nivel = ""

// Classificador de nível de herói baseado na quantidade de XP
if (quantidadeXp <= 1000) {
    nivel = "Ferro"
} else if (quantidadeXp <= 2000) {
    nivel = "Bronze"
} else if (quantidadeXp <= 5000) {
    nivel = "Prata"
} else if (quantidadeXp <= 7000) {
    nivel = "Ouro"
} else if (quantidadeXp <= 8000) {
    nivel = "Platina"
} else if (quantidadeXp <= 9000) {
    nivel = "Ascendente"
} else if (quantidadeXp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

// Exibe o nível do herói com base na quantidade de XP
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)