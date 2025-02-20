let openMenu = false;

const barra1 = document.getElementById('barra1');
const barra2 = document.getElementById('barra2');
const barra3 = document.getElementById('barra3');
const contenedorBarras = document.getElementById('contenedorBarras');

document.getElementById('contenedorBarras').addEventListener('click', () => {  
    openMenu = !openMenu;
    if(openMenu){
            
            barra1.classList.toggle('barra__1--transform');
            barra2.classList.toggle('barra__2--transform');
            barra3.classList.toggle('barra__3--transform');

            setTimeout(() => {
                barra1.classList.toggle('barra__1--rotar');
                barra3.classList.toggle('barra__3--rotar');
        
            }, 300); // 4 milisegundos
        }else{
            barra1.classList.toggle('barra__1--rotar');
            barra3.classList.toggle('barra__3--rotar');
            setTimeout(() => {
                barra1.classList.toggle('barra__1--transform');
                barra2.classList.toggle('barra__2--transform');
                barra3.classList.toggle('barra__3--transform');
            }, 300); // 4 milisegundos
        }
});
