console.log("hola");const carrito=document.querySelector("#carrito"),contenedorCarrito=document.querySelector("#lista-carrito tbody"),vaciarCarritoBtn=document.querySelector("#vaciar-carrito"),listaCursos=document.querySelector("#lista-cursos");let articulosCarrito=[];function cargarEventListeners(){listaCursos.addEventListener("click",agregarCurso),carrito.addEventListener("click",eliminarCurso),vaciarCarritoBtn.addEventListener("click",()=>{articulosCarrito=[],limpiarHTML()})}function agregarCurso(t){t.preventDefault(t),t.target.classList.contains("agregar-carrito")&&leerDatosCurso(t.target.parentElement.parentElement)}function eliminarCurso(t){if(t.target.classList.contains("borrar-curso")){const e=t.target.getAttribute("data-id");articulosCarrito=articulosCarrito.filter(i=>i.id!==e),carritoHTML()}}function leerDatosCurso(t){const e={imagen:t.querySelector("img").src,titulo:t.querySelector("h4").textContent,precio:t.querySelector(".precio span").textContent,id:t.querySelector("a").getAttribute("data-id"),cantidad:1};articulosCarrito=articulosCarrito.some(o=>o.id===e.id)?[...articulosCarrito.map(r=>(r.id===e.id&&r.cantidad++,r))]:[...articulosCarrito,e],console.log(articulosCarrito),carritoHTML()}function carritoHTML(){limpiarHTML(),articulosCarrito.forEach(t=>{const{imagen:e,titulo:i,precio:o,cantidad:r,id:a}=t,n=document.createElement("tr");n.innerHTML=`\n            <td><img src="${e}" width="100"></td>\n            <td>${i}</td>\n            <td>${o}</td>\n            <td>${r}</td>\n            <td><a href="#" class="borrar-curso" data-id="${a}"> X </a></td>\n        `,contenedorCarrito.appendChild(n)})}function limpiarHTML(){for(;contenedorCarrito.firstChild;)contenedorCarrito.removeChild(contenedorCarrito.firstChild)}cargarEventListeners();