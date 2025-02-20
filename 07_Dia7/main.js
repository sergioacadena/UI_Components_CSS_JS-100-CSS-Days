
const tarjetaNotificaciones = document.getElementById("tarjetaNotificaciones");
const tarjetaMenu = document.getElementById("tarjetaMenu");

document.getElementById("botonMenu").addEventListener('click', () => {
    tarjetaNotificaciones.classList.toggle('tarjeta-notificaciones--transform');
    tarjetaMenu.classList.toggle('tarjeta-menu--transform');
})

const inputSearch = document.getElementById("inputSearch");
document.getElementById("searchIcon").addEventListener('click', ()=>{
    inputSearch.classList.toggle('input-search--transform');
})



