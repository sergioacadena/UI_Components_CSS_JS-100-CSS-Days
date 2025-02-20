const crearMensajes = (nodos, idPrefijo, color, ajusteTop) => {
    const idNodos = [];
    const grafica = document.getElementById("grafica");

    nodos.forEach((nodo, i) => {   
        // Crear div del icono de mensaje
        let div = document.createElement("div");
        div.id = `mensaje${idPrefijo}${i}`;
        div.classList.add("mensaje");

        // Crear texto dentro del div
        let h5 = document.createElement("h5");
        h5.textContent = "0.0";  
        div.appendChild(h5);

        // Posicionar el mensaje
        div.style.left = `${i * 46.6}px`;
        div.style.top = `${nodo.getBoundingClientRect().top - ajusteTop}px`;

        // Agregar div al contenedor gráfico
        grafica.appendChild(div);  

        // Obtener el nodo correspondiente a la línea
        idNodos[i] = document.getElementById(`linea${idPrefijo}Nodo${i}`);
        const mensaje = document.getElementById(`mensaje${idPrefijo}${i}`); 

        // Verificar si el nodo existe antes de añadir eventos
        if (idNodos[i]) {
            idNodos[i].addEventListener('mouseover', () => {
                mensaje.style.height = '30px';
                mensaje.style.transform = "translateY(-50%)";
                mensaje.style.opacity = "1";
                mensaje.style.backgroundColor = color;
            });

            idNodos[i].addEventListener('mouseout', () => {
                mensaje.style.height = '0';
                mensaje.style.transform = "translateY(-24%)";
                mensaje.style.opacity = "0";
                mensaje.style.backgroundColor = "";
            });
        } else {
            console.warn(`Elemento linea${idPrefijo}Nodo${i} no encontrado.`);
        }
    });
};

// Aplicar la función a los distintos nodos
crearMensajes(document.querySelectorAll('.nodo-1'), 1, "rgb(243, 43, 176)", 310);
crearMensajes(document.querySelectorAll('.nodo-2'), 2, "rgb(43, 196, 243)", 305);
