
/* controlamos primer ciclo de un color */
primerCiclo ()
function primerCiclo (){

    let grados = 0;
    const ciclo1 = setInterval(() => {
        grados = grados + 2; // Incrementamos el ángulo poco a poco
        document.getElementById('firstCircle').style.background = 
        `conic-gradient(#f32a56 ${grados}deg, #242323 0deg)`;
        if (grados >= 360) { 
            clearInterval(ciclo1); // Detiene el setInterval cuando llega a 360
            setTimeout(segundoCiclo);
        }
    }, 10); // Actualiza cada 50ms para un efecto fluido 
}

function segundoCiclo (){

    let grados2 = 0;
    const ciclo2 = setInterval(() => {       
        grados2 = grados2 + 2; // Incrementamos el ángulo poco a poco
        document.getElementById('firstCircle').style.background = 
        `conic-gradient( #242323 ${grados2}deg, #f32a56 0deg)`;
        if (grados2 >= 360) {   
            clearInterval(ciclo2); // Detiene el setInterval cuando llega a 360
            setTimeout(primerCiclo);    
        }
    }, 10); // Actualiza cada 50ms para un efecto fluido 

}

/* Hora y Fecha del Reloj */
setInterval(()=>{

        const tiempo = new Date (); /* objeto que obtien datos de tiempo */
        horas = tiempo.getHours(); /* obtengo la hora en formato 24 hrs */
        horas = horas % 12 || 12;
        let ceroIzquierdaH = ""; if(horas<10){ ceroIzquierdaH ="0"} 
        minutos = tiempo.getMinutes(); /* obtebgo los minuos */
        let ceroIzquierdaM = ""; if(minutos<10){ ceroIzquierdaM ="0"} console.log(ceroIzquierdaM);
        dia = tiempo.getDay(); /* Obtebgo el día pero en formato número de día en una seman: 0 1 2 3 4 5 6 */
        diaMes = tiempo.getDate(); /* Obtebgo el día pero en formato número de día en un mes: 0 1 2 3 4 5 6  */
        mes = tiempo.getMonth(); /* Obtebgo el día pero en formato número de mes en un año: 0 1 2 3 4 5 6 7 8 9 10 11  */
        year = tiempo.getFullYear();

        const diasSemana = ["DOM", "LUN", "MAR", "MIÉ", "JUV", "VIE", "SAB"];
        const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
        const horaReloj = document.getElementById('relojHora');

        const relojFecha = document.getElementById('relojFecha');

        horaReloj.innerHTML = ceroIzquierdaH + horas + ":"+ ceroIzquierdaM + minutos;
        relojFecha.innerHTML = diasSemana[dia] + " " + diaMes + " " + meses[mes]  + " " + year;

},500)



