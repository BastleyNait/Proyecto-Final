document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        // Bebidas
        {
            id: "Twelve",
            titulo: "Twelve Pack Pilsen ",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40003111-G08fIp7u-medium.jpg",
            categoria: {
                nombre: "Bebidas",
                id: "bebidas"
            },
            precio: 36.90
        },
        {
            id: "Fanta 3L",
            titulo: "Fanta Piña 3L",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40003111-G08fIp7u-medium.jpg",
            categoria: {
                nombre: "bebidas",
                id: "bebidas"
            },
            precio: 6.9
        },
        {
            id: "San Luis 7L",
            titulo: "San Luis 7L",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-bbkeU3UT-medium.jpg",
            categoria: {
                nombre: "bebidas",
                id: "bebidas"
            },
            precio: 5.9
        },
        {
            id: "Coca Cola 3L",
            titulo: "Coca Cola 3L",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-CTJy3FET-medium.jpg",
            categoria: {
                nombre: "bebidas",
                id: "bebidas"
            },
            precio: 11.20
        },
        {
            id: "té 500ml",
            titulo: "Té negro free tea 500ml",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41306784-LVu2Uszb-medium.png",
            categoria: {
                nombre: "bebidas",
                id: "bebidas"
            },
            precio: 2.9
        },
        {
            id: "Jugo de Piña Selva",
            titulo: "Jugo de Piña Selva",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41216033-7y74RMSG-medium.jpg",
            categoria: {
                nombre: "bebidas",
                id: "bebidas"
            },
            precio: 7.5
        },
        {
            id: "Bio 300ml",
            titulo: "Jugo de Aguaje BIO",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42064781-eQaD3pSt-medium.jpg",
            categoria: {
                nombre: "bebidas",
                id: "bebidas"
            },
            precio: 4.2
        },
        {
            id: "Chicha Morada 3 L",
            titulo: "Chicha Morada 3 L",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40464492-p0UK87C--medium.jpg",
            categoria: {
                nombre: "bebidas",
                id: "bebidas"
            },
            precio: 8.8
        },
        {
            id: "schweppes 1.5 L",
            titulo: "Ginger Ale 1.5 L",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40784897-qi8AKcA1-medium.jpg",
            categoria: {
                nombre: "bebidas",
                id: "bebidas"
            },
            precio: 5.5
        },
        // Camisetas
        {
            id: "Kisses C&C",
            titulo: "Kisses C&C",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-CsnoB8gd-medium.jpg",
            categoria: {
                nombre: "Golosinas",
                id: "golosinas"
            },
            precio: 9
        },
        {
            id: "Vizzio grande",
            titulo: "Vizzio grande",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-9f0nij6t-medium.jpg",
            categoria: {
                nombre: "golosinas",
                id: "golosinas"
            },
            precio: 20
        },
        {
            id: "Mentos 87.2g",
            titulo: "Mentos 87.2g",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42378982-eIaS0LvG-medium.jpg",
            categoria: {
                nombre: "golosinas",
                id: "golosinas"
            },
            precio: 3.9
        },
        {
            id: "Lays + Doritos",
            titulo: "Pack Lays + Doritos Grandes",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42122737-CFI-JPFK-medium.jpeg",
            categoria: {
                nombre: "golosinas",
                id: "golosinas"
            },
            precio: 11.12
        },
        {
            id: "Chettos Queso 200g",
            titulo: "Chettos Queso 200g",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42223022-kcSQWK2E-medium.jpeg",
            categoria: {
                nombre: "golosinas",
                id: "golosinas"
            },
            precio: 5.9
        },
        {
            id: "Princesa Menta 17u",
            titulo: "Princesa Menta 17u",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42372443-R_gPG5Yy-medium.jpg",
            categoria: {
                nombre: "golosinas",
                id: "golosinas"
            },
            precio: 11.9
        },
        {
            id: "Morochas Pack",
            titulo: "Morochas Pack 6u",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41360410_1-EA3R5xRM-medium.jpg",
            categoria: {
                nombre: "golosinas",
                id: "golosinas"
            },
            precio: 4.90
        },
        {
            id: "Bombones Sublime",
            titulo: "Bombones Sublime",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41939704-po5dSafq-medium.jpg",
            categoria: {
                nombre: "golosinas",
                id: "golosinas"
            },
            precio: 11
        },
        {
            id: "Lays Ondas 150g",
            titulo: "Lays Ondas 150g",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42468761-0fJ6iuyi-medium.jpeg",
            categoria: {
                nombre: "golosinas",
                id: "golosinas"
            },
            precio: 5.5
        },
        // Aseo y limpieza
        {
            id: "Clorox Color",
            titulo: "Legia Clorox Color 930ml",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/20088558_2-twOiUlJX-medium.jpg",
            categoria: {
                nombre: "Limpieza",
                id: "limpieza"
            },
            precio: 11.2
        },

        {
            id: "Ayudin 2.6L",
            titulo: "Lavavajillas Ayudin 2.6L ",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41441088-YL0VNL1D-medium.jpg",
            categoria: {
                nombre: "limpieza",
                id: "limpieza"
            },
            precio: 31.9
        },
        {
            id: "PH Elite 40 rollos",
            titulo: "PH Elite 40 rollos",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41548292_1-BQLEPS-d-medium.jpg",
            categoria: {
                nombre: "Limpieza",
                id: "limpieza"
            },
            precio: 65.9
        },
        {
            id: "Paño Scott",
            titulo: "Paño Scott 116u",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40524075-iM5h2x0Q-medium.jpg",
            categoria: {
                nombre: "limpieza",
                id: "limpieza"
            },
            precio: 14.9
        },
        {
            id: "Detergente Líquido Skip 3L",
            titulo: "Detergente Líquido Skip 3L",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41760157-h5b_TsuU-medium.jpg",
            categoria: {
                nombre: "limpieza",
                id: "limpieza"
            },
            precio: 37.5
        },


        {
            id: "Servilleta Scott 220u",
            titulo: "Servilleta Scott 220u",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41798768-6WXgnGdd-medium.png",
            categoria: {
                nombre: "limpieza",
                id: "limpieza"
            },
            precio: 9.5
        },
        {
            id: "Papel 65 Metros Suave 8u",
            titulo: "Papel 65 Metros Suave 8u",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42522717-1BXU58rD-medium.jpg",
            categoria: {
                nombre: "limpieza",
                id: "limpieza"
            },
            precio: 22.9
        },
        {
            id: "Limpiador Para Pisos De Madera",
            titulo: "Limpiador Para Pisos De Madera",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-nGKl1S3A-medium.jpg",
            categoria: {
                nombre: "limpieza",
                id: "limpieza"
            },
            precio: 26.9
        },
        {
            id: "Suavizante Tela Bolivar Plus 2.8L",
            titulo: "Suavizante Tela Bolivar Plus 2.8L",
            imagen: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-h6ZDrMEY-medium.jpg",
            categoria: {
                nombre: "limpieza",
                id: "limpieza"
            },
            precio: 27.9
        }
    ];


    const contenedorProductos = document.querySelector("#contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal");
    let botonesAgregar = document.querySelectorAll(".producto-agregar");
    const numerito = document.querySelector("#numerito");


    function cargarProductos(productosElegidos) {
        contenedorProductos.innerHTML = "";
        // implementacion para recibir json de rest y ya no utilizar el arreglo de objetos de arriba (todavia no en uso)
        // fetch() 
        // .then(res => res.json)
        // .then(data => data.forEach(producto => {

        //     const div = document.createElement("div");
        //     div.classList.add("producto");
        //     div.innerHTML = `
        //         <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        //         <div class="producto-detalles">
        //             <h3 class="producto-titulo">${producto.titulo}</h3>
        //             <p class="producto-precio">$${producto.precio}</p>
        //             <button class="producto-agregar" id="${producto.id}">Agregar</button>
        //         </div>
        //     `;

        //     contenedorProductos.append(div);
        // }))

        productosElegidos.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            `;
            contenedorProductos.append(div);
        })

        actualizarBotonesAgregar();
    }

    cargarProductos(productos);

    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {

            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");
            if (e.currentTarget.id != "todos") {
                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;
                console.log(productoCategoria.categoria.nombre)
                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
                cargarProductos(productosBoton);
            } else {
                tituloPrincipal.innerText = "Todos los productos";
                cargarProductos(productos);
            }

        })
    });

    function actualizarBotonesAgregar() {
        botonesAgregar = document.querySelectorAll(".producto-agregar");

        botonesAgregar.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        });
    }

    let productosEnCarrito;

    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

    if (productosEnCarritoLS) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        actualizarNumerito();
    } else {
        productosEnCarrito = [];
    }

    function agregarAlCarrito(e) {
        const idBoton = e.currentTarget.id;
        const productoAgregado = productos.find(producto => producto.id === idBoton);

        if (productosEnCarrito.some(producto => producto.id === idBoton)) {
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado);
        }

        actualizarNumerito();

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }

    function actualizarNumerito() {
        let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numerito.innerText = nuevoNumerito;
    }
});
