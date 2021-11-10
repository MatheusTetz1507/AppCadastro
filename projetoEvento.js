let dataEvento = new Date("01/16/2022");
let dataHoje = new Date("11/16/2021");
let idade = 20;
let participantes = ["Roberto", "Mariani", "Cleyton", "AClara"];
let nroParticipantes = participantes.length;
let palestrantes = ["Matheus", "Betina", "Marcos"];
let nroPalestrantes = palestrantes.length;
let pessoa = new Boolean(false);    


console.log("Informe a data desejada");

console.log(dataEvento);

if (dataEvento < dataHoje) {
    console.log ("Data inválida!");
}

console.log("Sua idade: ");

if (idade < 18) {
    console.log ("Não é permitido a inscrição de menor de 18 anos!");
}

console.log("Insira seu nome...");
console.log("Insira seu telefone");

console.log ("participante ou palestrante?")

if (pessoa = false){
    if (nroParticipantes >= 100) {
        console.log ("Limite de participantes excedido");
        }
    else nroParticipantes = nroParticipantes + 1;
}
else {
    nroPalestrantes = nroPalestrantes + 1;
}

console.log ("Palestrantes: " + palestrantes);
console.log ("Participantes: " + participantes);
