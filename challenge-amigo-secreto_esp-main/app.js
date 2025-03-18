// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function sortearAmigo() {
    let resultado = amigos.map(amigo => ${amigo} → ${amigos[Math.floor(Math.random() * amigos.length)]});
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    resultado.forEach(pair => {
        const li = document.createElement("li");
        li.textContent = pair;
        resultadoLista.appendChild(li);
    });
}
