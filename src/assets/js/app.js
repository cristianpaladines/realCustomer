// variables
console.log("hola")
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // agrega producto presionando "Agregar al carrito"
    listaCursos.addEventListener("click", agregarCurso);

    // elimina productos
    carrito.addEventListener("click", eliminarCurso);

    // lo vacia
    vaciarCarritoBtn.addEventListener("click", () => {
        articulosCarrito = [];

        limpiarHTML();
    })
}

// FUNCIONES
function agregarCurso(e) {
    e.preventDefault(e)

    if(e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Elimina producto del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains("borrar-curso")) {
        const cursoId = e.target.getAttribute("data-id");

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML();
    }
}

// LEE EL CONTENIDO DEL HTML AL QUE DIMOS CLICK Y EXTRAE LA INFORMACION DE CADA PRODUCTO
function leerDatosCurso(curso) {
    // console.log(curso);

    // crear el objeto
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    // rectifica si un producto se repite
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe) {
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);

    carritoHTML();
}

// MUESTRA EL CARRITO EN EL HTML
function carritoHTML() {

    // limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y luego genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        // agrega el HTML del carrito en el "tbody"
        contenedorCarrito.appendChild(row);
    });
}

// ELIMINA PRODUCTOS DEL "tbody"
function limpiarHTML() {
    // contenedorCarrito.innerHTML = "";

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

