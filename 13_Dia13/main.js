

const elements = [
    { id: "coverTop", style: "top", value: "0%" },
    { id: "coverBottom", style: "bottom", value: "0%" },
    { id: "coverCircle", style: "top", value: "45%" },
    { id: "cerrarPopUp", style: "top", value: "6%" }
];
document.querySelectorAll(".foto__btnOver--circle").forEach(boton=>{
    boton.addEventListener('click', () => {
        elements.forEach(({ id, style, value }) => {
            document.getElementById(id).style[style] = value;
        });
    });
});

const elementsClose = [
    { id: "coverTop", style: "top", value: "" },
    { id: "coverBottom", style: "bottom", value: "" },
    { id: "coverCircle", style: "top", value: "" },
    { id: "cerrarPopUp", style: "top", value: "" }
];

document.getElementById("cerrarPopUp").addEventListener('click', () => {
    elementsClose.forEach(({ id, style, value }) => {
        document.getElementById(id).style[style] = value;
    });
});


