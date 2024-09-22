

const url_path = "https://siau.unillanos.edu.co:8443/CONVENIOS/"

const url_eventos = url_path + 'InformacionProyectos?accion=' + 'eventos'
const url_ec = url_path + 'InformacionProyectos?accion=' + 'educacion_continua'

document.addEventListener("DOMContentLoaded", function() {

    fetch(url_path+'InformacionProyectos?accion=eventos', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })

        .then(response => response.json())
        .then(data => {

            const containerDesktop = document.querySelector('#cursos-eventos'); 
            const containerMobile = document.querySelector('#cursos-eventos-mobil'); 

            data.forEach(diplomado => {

                const descripcionConClase = diplomado.descripcion.replace('<p>', '<p class="descripcion">');
                const descripcionConClaseMobil = diplomado.descripcion.replace('<p>', '<p class="descripcion-mobil">');
                let server_path = url_path+diplomado.img_inicio  

                const cardDesktop = document.createElement('div');
                cardDesktop.classList.add('diplomado-card');
                cardDesktop.innerHTML = `
                    <div class="diplomado-content">
                        <h2 class="titulo">${diplomado.modalidad}</h2>
                        <h3 class="subtitulo">XI Encuentro Regional</h3>
                        <p class="descripcion">${descripcionConClase}</p>
                    
                        <div class="info">
                            <div class="separator"></div>
                            <p><strong>Modalidad:</strong> ${diplomado.modalidad}</p>
                            <div class="separator"></div>
                            <p><strong>Inversión:</strong> ${diplomado.inversion}</p>
                            <div class="separator"></div>
                            <p><strong>Duración:</strong> ${diplomado.duracion}</p>
                            <div class="separator"></div>
                        </div>
                        
                        <a href="#" class="boton">Leer más</a>
                    </div>

                    <div class="diplomado-imagen">
                        <img src="${server_path}" alt="${diplomado.titulo}"> 
                    </div>              
                `;
                console.log(diplomado.img_inicio)
                containerDesktop.appendChild(cardDesktop);

                const cardMobile = document.createElement('div');
                

                cardMobile.classList.add('diplomado-card-mobil');
                cardMobile.innerHTML = `
                    <div class="diplomado-content-mobil">
                        <h2 class="titulo-mobil">${diplomado.modalidad}</h2>
                        <h3 class="subtitulo-mobil">XI Encuentro Regional</h3>
                        <div class="diplomado-imagen-mobil">
                             <img src="${server_path}" alt="${diplomado.titulo}"> 
                        </div>
                        <p class="descripcion-mobil">${descripcionConClaseMobil}</p>
                        <div class="info">
                            <div class="separator"></div>
                            <p><strong>Modalidad:</strong> ${diplomado.modalidad}</p>
                            <div class="separator"></div>
                            <p><strong>Inversión:</strong> ${diplomado.inversion}</p>
                            <div class="separator"></div>
                            <p><strong>Duración:</strong> ${diplomado.duracion}</p>
                            <div class="separator"></div>
                        </div>
                        <a href="#" class="boton">Leer más</a>
                    </div>
                `;
                containerMobile.appendChild(cardMobile);
            });
        })
        .catch(error => console.error('Error:', error));
});

document.addEventListener("DOMContentLoaded", function() {

    fetch(url_path+'InformacionProyectos?accion=educacion_continua', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })

        .then(response => response.json())
        .then(data => {

            const containerDesktop = document.querySelector('#cursos-educacion'); 
            const containerMobile = document.querySelector('#cursos-educacion-mobil'); 

            data.forEach(diplomado => {

                const descripcionConClase = diplomado.descripcion.replace('<p>', '<p class="descripcion">');
                const descripcionConClaseMobil = diplomado.descripcion.replace('<p>', '<p class="descripcion-mobil">');
                let server_path = url_path+diplomado.img_inicio  

                const cardDesktop = document.createElement('div');
                cardDesktop.classList.add('diplomado-card');
                cardDesktop.innerHTML = `
                    <div class="diplomado-content">
                        <h2 class="titulo">${diplomado.modalidad}</h2>
                        <h3 class="subtitulo">XI Encuentro Regional</h3>
                        <p class="descripcion">${descripcionConClase}</p>
                    
                        <div class="info">
                            <div class="separator"></div>
                            <p><strong>Modalidad:</strong> ${diplomado.modalidad}</p>
                            <div class="separator"></div>
                            <p><strong>Inversión:</strong> ${diplomado.inversion}</p>
                            <div class="separator"></div>
                            <p><strong>Duración:</strong> ${diplomado.duracion}</p>
                            <div class="separator"></div>
                        </div>
                        
                        <a href="#" class="boton">Leer más</a>
                    </div>

                    <div class="diplomado-imagen">
                        <img src="${server_path}" alt="${diplomado.titulo}"> 
                    </div>              
                `;
                console.log(diplomado.img_inicio)
                containerDesktop.appendChild(cardDesktop);

                const cardMobile = document.createElement('div');
                

                cardMobile.classList.add('diplomado-card-mobil');
                cardMobile.innerHTML = `
                    <div class="diplomado-content-mobil">
                        <h2 class="titulo-mobil">${diplomado.modalidad}</h2>
                        <h3 class="subtitulo-mobil">XI Encuentro Regional</h3>
                        <div class="diplomado-imagen-mobil">
                             <img src="${server_path}" alt="${diplomado.titulo}"> 
                        </div>
                        <p class="descripcion-mobil">${descripcionConClaseMobil}</p>
                        <div class="info">
                            <div class="separator"></div>
                            <p><strong>Modalidad:</strong> ${diplomado.modalidad}</p>
                            <div class="separator"></div>
                            <p><strong>Inversión:</strong> ${diplomado.inversion}</p>
                            <div class="separator"></div>
                            <p><strong>Duración:</strong> ${diplomado.duracion}</p>
                            <div class="separator"></div>
                        </div>
                        <a href="#" class="boton">Leer más</a>
                    </div>
                `;
                containerMobile.appendChild(cardMobile);
            });
        })
        .catch(error => console.error('Error:', error));
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");

abrir.addEventListener("click", () => {
    nav.classList.toggle("visible"); // Toggle para mostrar u ocultar el menú
    abrir.classList.toggle("open");  // Toggle para cambiar el estado del botón (opcional)
});

function updateBannerImage() {
    const banner = document.querySelector('.banner');
    const width = window.innerWidth;

    if (width >= 1000) {
        banner.style.backgroundImage = "url('images/bannermain.jpg')";
    } else {
        banner.style.backgroundImage = "url('images/bannerecmobil.png')";
    }
}

updateBannerImage();

window.addEventListener('resize', updateBannerImage);