let user = window.sessionStorage.getItem("user");

if (user == "admin") {
    let contNav = document.getElementById("contNav");

    let divInt = document.createElement("div");
    let link = document.createElement("a");

    link.textContent = "ADMIN";
    link.setAttribute("href", "./pages/admin.html");
    link.classList.add("p-0", "text-neutral-500", "transition", "duration-200", "hover:text-neutral-700", "hover:ease-in-out", "focus:text-neutral-700", "disabled:text-black/30", "motion-reduce:transition-none", "dark:text-neutral-200", "dark:hover:text-neutral-400", "dark:focus:text-neutral-400", "lg:px-2", "[&.active]:text-black/90", "dark:[&.active]:text-neutral-400", "responsive-letter");

    divInt.classList.add("mb-4", "pl-2", "lg:mb-0", "lg:pl-0", "lg:pr-1");
    divInt.appendChild(link);

    contNav.appendChild(divInt);
}


// TODO ESTE CÓDIGO CORRESPONDE A LA GENERACIÓN DE CARDS ALEATORIAS DE LA ÚLTIMA SECCIÓN

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let conteiner = document.getElementById("cardsIndex");

function crearCardPromo(titulo, descripcion, precio, imagen) {
    let img = document.createElement("img");
    img.setAttribute("src", imagen);
    img.setAttribute("alt", `imagen-${titulo}`)

    let title = document.createElement("h4");
    title.textContent = titulo;

    let descrip = document.createElement("p");
    descrip.textContent = descripcion;

    let btnPrecio = document.createElement("button");
    btnPrecio.textContent = `$ ${precio}`;

    let contImg = document.createElement("div");
    let contData = document.createElement("div");
    let cont = document.createElement("div");

    contImg.append(img);
    contData.append(title, descrip);
    cont.append(contImg, contData, btnPrecio);

    contImg.classList.add("card-s-img");
    contData.classList.add("card-p-data")
    cont.classList.add("card-promos");

    return cont;
}


fetch("../js/lista-promos.json")
.then(response => response.json())
.then(data => {

    // información pedida guardada en una variable
    const promos = data;

    for (let i = 0; i < 3; i++) {

        const promo = promos[getRandomIntInclusive(0, promos.length - 1)];

        let card  = crearCardPromo(promo.titulo, promo.descripcion, promo.precio, promo.img);

        conteiner.appendChild(card);
    }

})
.catch(error => {
    console.error('Error:', error);
});


// TODO ESTE CÓDIGO CORRESPONDE AL CURRUSEL DE IMÁGENES

let btnLSlider = document.querySelector(".btn-slider-left");
let btnRSlider = document.querySelector(".btn-slider-right");
let contImg = document.querySelector(".slider--inner").children;
let contIndicators = document.querySelector(".slider-indicators").children;

btnRSlider.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < contImg.length; i++) {
        const element = contImg[i];
        const indicator = contIndicators[i];

        if (element.classList[0] == "primer-img") {
            if (i != contImg.length - 1) {
                let next = element.nextElementSibling;
                element.classList.remove("primer-img");
                next.classList.add("primer-img")

                let nextInd = indicator.nextElementSibling;
                indicator.classList.remove("indicador-active");
                nextInd.classList.add("indicador-active")

                break
            }
            else{
                let next = contImg[0];
                element.classList.remove("primer-img");
                next.classList.add("primer-img");
                
                let nextInd = contIndicators[0];
                indicator.classList.remove("indicador-active");
                nextInd.classList.add("indicador-active")

                break
            }
        }
    }

})

btnLSlider.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < contImg.length; i++) {
        const element = contImg[i];
        const indicator = contIndicators[i];

        if (element.classList[0] == "primer-img") {
            if (i != 0) {
                let previous = element.previousElementSibling;
                element.classList.remove("primer-img");
                previous.classList.add("primer-img")

                let previousInd = indicator.previousElementSibling;
                indicator.classList.remove("indicador-active");
                previousInd.classList.add("indicador-active")

                break
            }
            else{
                let previous = contImg[contImg.length - 1];
                element.classList.remove("primer-img");
                previous.classList.add("primer-img");

                let previousInd = contIndicators[contIndicators.length - 1];
                indicator.classList.remove("indicador-active");
                previousInd.classList.add("indicador-active")

                break
            }
        }
    }

})

for (let i = 0; i < contIndicators.length; i++) {
    const element = contIndicators[i];
    
    element.addEventListener("click", (e) => {
        e.preventDefault();

        
        for (let j = 0; j < contImg.length; j++) {
            const element = contImg[j];
            if (element.classList[0] == "primer-img") {
                element.classList.remove("primer-img");
                contIndicators[j].classList.remove("indicador-active");
                break
            }
            
        }
        
        contIndicators[i].classList.add("indicador-active");
        contImg[i].classList.add("primer-img")
        
    })

}

