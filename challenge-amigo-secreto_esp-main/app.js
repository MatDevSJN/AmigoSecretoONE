// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para hacer el sorteo.");
        return;
    }

    let amigosDisponibles = [...amigos];
    let resultado = [];

    amigos.forEach(amigo => {
        let posibles = amigosDisponibles.filter(a => a !== amigo);
        const elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado.push(${amigo} → ${elegido});
        amigosDisponibles = amigosDisponibles.filter(a => a !== elegido);
    });

    mostrarResultado(resultado);
}
