
let user = window.sessionStorage.getItem("user");

if (user == "admin") {
    let contNav = document.getElementById("contNav");

    let divInt = document.createElement("div");
    let link = document.createElement("a");

    link.textContent = "ADMIN";
    link.setAttribute("href", "../pages/admin.html");
    link.classList.add("p-0", "text-neutral-500", "transition", "duration-200", "hover:text-neutral-700", "hover:ease-in-out", "focus:text-neutral-700", "disabled:text-black/30", "motion-reduce:transition-none", "dark:text-neutral-200", "dark:hover:text-neutral-400", "dark:focus:text-neutral-400", "lg:px-2", "[&.active]:text-black/90", "dark:[&.active]:text-neutral-400", "responsive-letter");

    divInt.classList.add("mb-4", "pl-2", "lg:mb-0", "lg:pl-0", "lg:pr-1");
    divInt.appendChild(link);

    contNav.appendChild(divInt);
}



conteiner = document.querySelector(".conteiner-cards-s");

function crearCardSabor(titulo, descripcion, imagen) {
    let img = document.createElement("img");
    img.setAttribute("src", imagen);
    img.setAttribute("alt", `imagen-${titulo}`)

    let title = document.createElement("h4");
    title.textContent = titulo;

    let descrip = document.createElement("p");
    descrip.textContent = descripcion;

    let contImg = document.createElement("div");
    let contData = document.createElement("div");
    let cont = document.createElement("div");

    contImg.append(img);
    contData.append(title, descrip);
    cont.append(contImg, contData);

    contImg.classList.add("card-s-img");
    contData.classList.add("card-s-data")
    cont.classList.add("card-sabores");

    return cont;
}


fetch("../js/lista-sabores.json")
.then(response => response.json())
.then(data => {

    // información pedida guardada en una variable
    const sabores = data;

    for (let i = 0; i < sabores.length; i++) {
        const sabor = sabores[i];

        let card  = crearCardSabor(sabor.titulo, sabor.descripcion, sabor.img);

        conteiner.appendChild(card);
    }

})
.catch(error => {
    console.error('Error:', error);
});


let sabores = JSON.parse(localStorage.getItem("Sabores"));

for (let i = 0; i < sabores.length; i++) {
    const sabor = sabores[i];
    
    let card  = crearCardSabor(sabor.titulo, sabor.descripcion, sabor.img);

    conteiner.appendChild(card);

}