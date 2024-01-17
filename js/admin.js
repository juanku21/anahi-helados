
let btnSabores = document.getElementById("btnSabores");

let sabores = [];

btnSabores.addEventListener("click", (e) => {
    e.preventDefault();

    let titulo = document.getElementById("sabor");
    let desc = document.getElementById("desc");
    let imgS = document.getElementById("imgS");

    if (titulo.value.trim() != "" && desc.value.trim() != "" && imgS.value.trim() != "") {
        let sabor = {
            titulo: titulo.value,
            descripcion: desc.value,
            img: imgS.value
        }
    
        sabores.push(sabor);
    
        localStorage.setItem("Sabores", JSON.stringify(sabores));
    
        titulo.value = "";
        desc.value = "";
        imgS.value = "";
    }
    else{
        alert("Debe ingresar los datos solicitados, no pueden haber campos vacíos")
    }

})


let btnPromos = document.getElementById("btnPromos");

let promos = [];

btnPromos.addEventListener("click", (e) => {
    e.preventDefault();

    let titulo = document.getElementById("promo");
    let descP = document.getElementById("descP");
    let precio = document.getElementById("precio");
    let imgP = document.getElementById("imgP");

    if (titulo.value.trim() != "" && descP.value.trim() != "" && precio.value.trim() != "" && imgP.value.trim() != "") {
        let promo = {
            titulo: titulo.value,
            descripcion: descP.value,
            precio: precio.value,
            img: imgP.value
        }
    
        promos.push(promo);
    
        localStorage.setItem("Promos", JSON.stringify(promos));
    
        titulo.value = "";
        descP.value = "";
        imgP.value = "";
        precio.value = "";
    }
    else{
        alert("Debe ingresar todos los datos solicitados")
    }

})

let cerrarS = document.getElementById("cerrarS");

cerrarS.addEventListener("click", (e) => {
    e.preventDefault();

    window.sessionStorage.clear();

    location.href = "../index.html";
})