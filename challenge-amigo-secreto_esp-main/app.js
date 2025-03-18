let amigos = [];

// Agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("Por favor ingresa un nombre válido y que no esté repetido.");
    }
}

// Actualizar la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para hacer el sorteo.");
        return;
    }

    let amigosDisponibles = amigos.slice();
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let posibles = [];
        for (let j = 0; j < amigosDisponibles.length; j++) {
            if (amigosDisponibles[j] !== amigos[i]) {
                posibles.push(amigosDisponibles[j]);
            }
        }

        if (posibles.length === 0) {
            alert("No se puede hacer el sorteo sin que alguien se sortee a sí mismo. Inténtalo de nuevo.");
            return;
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado.push(amigos[i] + " → " + elegido);
        let index = amigosDisponibles.indexOf(elegido);
        amigosDisponibles.splice(index, 1);
    }

    mostrarResultado(resultado);
}

// Mostrar el resultado del sorteo
function mostrarResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    for (let i = 0; i < resultado.length; i++) {
        const li = document.createElement("li");
        li.textContent = resultado[i];
        resultadoLista.appendChild(li);
    }
}