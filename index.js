let heroi = "Homem De Ferro"
let pontuação = 8493

let nivelDoHeroi;

if (pontuação <= 1000) {
    nivelDoHeroi = "ferro";
} else if (pontuação >= 1001 && pontuação <= 2000) {
    nivelDoHeroi = "bronze";
} else if (pontuação >= 2001 && pontuação <= 5000) {
    nivelDoHeroi = "prata";
} else if (pontuação >= 5001 && pontuação <= 7000) {
    nivelDoHeroi = "ouro";
} else if (pontuação >= 7001 && pontuação <= 8000) {
    nivelDoHeroi = "platina";
} else if (pontuação >= 8001 && pontuação <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (pontuação >= 9001 && pontuação <= 10000) {
    nivelDoHeroi = "imortal";
} else {
    nivelDoHeroi = "radiante";
}

console.log("O héroi " + heroi + " está no nível " + nivelDoHeroi)