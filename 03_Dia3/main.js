window.onload = () => {
    const elements = {
        sunCircle: document.getElementById("sunCircle"),
        piramid: document.getElementById("piramid"),
        piramidSide: document.getElementById("piramidSide"),
        piramidShadow: document.getElementById("piramidShadow"),
        circleMask: document.getElementById("circleMasck")
    };

    // Matrices con los valores del clip-path para cada fase de la animación
    const clipPaths = [
        [[108, 82], [18, 66], [82, 66]],
        [[62, 74], [18, 66], [82, 66]],
        [[8, 98], [18, 66], [82, 66]],
        [[0, 70], [18, 66], [82, 66]]
    ].map(points => `polygon(${points.map(p => `${p[0]}% ${p[1]}%`).join(", ")})`);

    // Configuración de las animaciones con sus respectivos tiempos
    const animationSteps = [ /* añade funciones como objetos en el primer indice de un array */
        { delay: 0,   action: () => rotateSun(45, clipPaths[0]) },
        { delay: 90,  action: () => elements.circleMask.style.backgroundColor = "transparent" },
        { delay: 600, action: () => {
            elements.piramidSide.style.backgroundColor = "#d6d5d5";
            rotateSun(180, clipPaths[1]);
        }},
        { delay: 800, action: () => {
            elements.piramid.style.borderBottomColor = "#adadad";
            elements.piramid.style.transition = "border-bottom 1.2s";
            elements.piramidSide.style.backgroundColor = "#fcf6eb";
            elements.piramidShadow.style.clipPath = clipPaths[2];
        }},
        { delay: 1400, action: () => elements.piramidShadow.style.clipPath = clipPaths[3] },
        { delay: 1500, action: () => elements.circleMask.style.backgroundColor = "rgb(22, 32, 41)" }
    ];/* cierre del arra */

    // Función para rotar el sol y cambiar el clip-path
    function rotateSun(degrees, clipPath) {
        elements.sunCircle.style.transition = "transform 3s";
        elements.sunCircle.style.transform = `rotate(${degrees}deg)`;
        elements.piramidShadow.style.clipPath = clipPath;
    }

    // Ejecuta la secuencia de animación
    function startAnimation() {
        animationSteps.forEach(({ delay, action }) => setTimeout(action, delay));
    }
    
    startAnimation(); // Ejecuta la animación al cargar la página
};
