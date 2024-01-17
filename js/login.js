
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


let btnLog = document.getElementById("btnLog");
let form = document.getElementsByClassName("form-login")
form = form[0];
let cantError = 0;

const limpiarDatos = (usuario, contraseña) => {
    usuario.value = "";
    contraseña.value = "";
}

btnLog.addEventListener("click", (e) => {
    e.preventDefault()

    let user = document.getElementById("user");
    let pass = document.getElementById("pass")

    if (user.value=="admin" && pass.value=="frutilla") {
        window.sessionStorage.setItem("user", user.value);
        location.href = "../pages/admin.html";
    }
    else if (cantError == 0) {
        
        let error = document.createElement("div");

        msjError.textContent = "Usuario o contraseña incorrectos";

        error.append(msjError);
        error.classList.add("mensaje-error")
    
        form.append(error)
    
        cantError = cantError + 1;
    
        limpiarDatos(user, pass);
    }
    else{
        limpiarDatos(user, pass);
    }

})
