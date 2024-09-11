const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=> {

    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {

    nav.classList.remove("visible");
})

function updateBannerImage() {
    const banner = document.querySelector('.banner');
    const width = window.innerWidth;

    if (width >= 801) {
        banner.style.backgroundImage = "url('images/bannermain.jpg')";
    } else if (width >= 601) {
        banner.style.backgroundImage = "url('images/prueba.jpg')";
    } else {
        banner.style.backgroundImage = "url('images/bannerecmobil.png')";
    }
}

// Llama a la función al cargar la página
updateBannerImage();

// Llama a la función cada vez que la ventana se redimensione
window.addEventListener('resize', updateBannerImage);