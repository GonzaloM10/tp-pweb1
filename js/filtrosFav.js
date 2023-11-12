// aca creo las canciones con sus atributos
let canciones = [
    {
        "nombre": 'Bandido',
        "album": 'Album 1',
        "duracion": '1:50',
        "reproducciones": '2.000.000',
    },
    {
        "nombre": 'Rehúso',
        "album": 'Album 2',
        "duracion": '2:20',
        "reproducciones": '5.000.000',
    },
    {
        "nombre": 'Chamaquita',
        "album": 'Album 3',
        "duracion": '3:10',
        "reproducciones": '600.000',
    },
    {
        "nombre": 'La Nota',
        "album": 'Album 4',
        "duracion": '2:58',
        "reproducciones": '4.800.000',
    },
    {
        "nombre": 'Morocha',
        "album": 'Album 1',
        "duracion": '1:12',
        "reproducciones": '4.200.000',
    },
    {
        "nombre": 'One day',
        "album": 'Album 2',
        "duracion": '2:08',
        "reproducciones": '5.000.000',
    },
    {
        "nombre": 'Sweet Child On Mine',
        "album": 'Album 3',
        "duracion": '2:45',
        "reproducciones": '456.000',
    },
    {
        "nombre": 'Chocolate',
        "album": 'Album 4',
        "duracion": '1:56',
        "reproducciones": '4.000.000',
    },
    {
        "nombre": 'Linda',
        "album": 'Album 1',
        "duracion": '1:39',
        "reproducciones": '6.000.000',
    },
    {
        "nombre": 'Bzrp Session #46',
        "album": 'Album 2',
        "duracion": '13:01',
        "reproducciones": '27.000.000',
    },
    {
        "nombre": 'Playa del Inglés',
        "album": 'Album 3',
        "duracion": '5:40',
        "reproducciones": '1.200.000',
    },
    {
        "nombre": 'Ahora y siempre',
        "album": 'Album 4',
        "duracion": '2:58',
        "reproducciones": '4.800.000',
    },
    {
        "nombre": 'Maldición',
        "album": 'Album 1',
        "duracion": '1:39',
        "reproducciones": '4.050.000',
    },
    {
        "nombre": 'Inocente',
        "album": 'Album 2',
        "duracion": '1:01',
        "reproducciones": '200.000',
    },
    {
        "nombre": 'Universitaria',
        "album": 'Album 3',
        "duracion": '7:20',
        "reproducciones": '1.900.000',
    },
    {
        "nombre": 'Up & Up',
        "album": 'Album 4',
        "duracion": '3:05',
        "reproducciones": '4.108.000',
    },
    {
        "nombre": 'Luces',
        "album": 'Album 1',
        "duracion": '1:59',
        "reproducciones": '3.200.000',
    },
    {
        "nombre": 'Picky picky',
        "album": 'Album 2',
        "duracion": '3:40',
        "reproducciones": '720.000',
    },
    {
        "nombre": 'Una Foto',
        "album": 'Album 3',
        "duracion": '2:50',
        "reproducciones": '1.386.000',
    },
    {
        "nombre": 'Up & Up',
        "album": 'Album 4',
        "duracion": '4:13',
        "reproducciones": '158.000',
    },
    {
        "nombre": 'Amor clacificado',
        "album": 'Album 1',
        "duracion": '4:13',
        "reproducciones": '8.250.000',
    },
    {
        "nombre": 'Yellow',
        "album": 'Album 2',
        "duracion": '1:27',
        "reproducciones": '480.000',
    },
    {
        "nombre": 'Clocks',
        "album": 'Album 3',
        "duracion": '6:45',
        "reproducciones": '6.045.000',
    },
    {
        "nombre": 'Reasons',
        "album": 'Album 4',
        "duracion": '5:12',
        "reproducciones": '3.480.000',
    },
];

// para poder filtrar las canciones, primero debo borrar TODO el contenido de la tabla por lo que tambien se elimina la primer fila donde aparecen las secciones de Nombre, Album, Duracion y Reproduccion, entonces
// creo esta variable para cuando borro toda la tabla, seguido meto esta variable, osea, primero se borran todas las filas y automaticamente, meto de vuelta la primer fila donde estan las secciones.
let filaPrincipal = `
    <tr class="fila-principal">
        <td class="columna-play"></td>
        <td class="columnas">Canción</td>
        <td class="columnas">Álbum</td>
        <td class="columnas">Duración</td>
        <td class="columnas">Reproducciones</td>
    </tr>`;

// aca me traigo la tabla por su id.
let tabla = document.getElementById("tabla");

// hago un foreach del array de canciones que cree arriba de todo para que: por CADA cancion, creo una fila con los atributos de esa cancion y la agrego a la tabla del html
canciones.forEach((cancion)=>{
    tabla.innerHTML +=`
     <tr class="filas">
        <td class="columna-play"><a href="reproduciendo.html"><img class="play-boton" src="../icons/playy.svg" alt="Play" title="Reproducir"></a></td>
        <td class="columnas"><div class="celda-nombre-y-fav"><p class="nombre-cancion"> ${cancion.nombre} </p><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#606468" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><path d="M10.82,2.29c0.201,-0.475 0.667,-0.784 1.182,-0.784c0.516,0 0.982,0.309 1.183,0.784l2.394,5.66l6.029,0.846c0.499,0.07 0.911,0.424 1.053,0.907c0.143,0.483 -0.009,1.005 -0.39,1.334l-4.311,3.738l1.16,6.199c0.092,0.491 -0.109,0.99 -0.515,1.28c-0.406,0.291 -0.944,0.319 -1.378,0.074l-5.225,-2.949l-5.206,2.939c-0.438,0.247 -0.979,0.216 -1.385,-0.079c-0.407,-0.295 -0.604,-0.8 -0.505,-1.292l1.139,-5.668l-4.438,-4.276c-0.354,-0.341 -0.482,-0.854 -0.33,-1.321c0.151,-0.468 0.556,-0.807 1.043,-0.876l6.106,-0.856l2.394,-5.66Z"/></g></svg></div></td>
        <td class="columnas"><div class="celda-nombre-y-fav"><p class="nombre-cancion"> ${cancion.album} </p><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#606468" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><path d="M10.82,2.29c0.201,-0.475 0.667,-0.784 1.182,-0.784c0.516,0 0.982,0.309 1.183,0.784l2.394,5.66l6.029,0.846c0.499,0.07 0.911,0.424 1.053,0.907c0.143,0.483 -0.009,1.005 -0.39,1.334l-4.311,3.738l1.16,6.199c0.092,0.491 -0.109,0.99 -0.515,1.28c-0.406,0.291 -0.944,0.319 -1.378,0.074l-5.225,-2.949l-5.206,2.939c-0.438,0.247 -0.979,0.216 -1.385,-0.079c-0.407,-0.295 -0.604,-0.8 -0.505,-1.292l1.139,-5.668l-4.438,-4.276c-0.354,-0.341 -0.482,-0.854 -0.33,-1.321c0.151,-0.468 0.556,-0.807 1.043,-0.876l6.106,-0.856l2.394,-5.66Z"/></g></svg></div></td>
        <td class="columnas"> ${cancion.duracion} </td>
        <td class="columnas"> ${cancion.reproducciones} </td>
    </tr>`;
});

// me traigo el selector de albums del html por su id
let selectorDeAlbums = document.querySelector("#tiposAlbums");

// agrego un escuchador que cuando el selector detecta un cambio (change, osea se cambia de opcion), hago lo siguiente:
selectorDeAlbums.addEventListener("change", ()=>{

    // limpio la tabla
    tabla.innerHTML = "";
    // agrego la primer fila donde aparecen las secciones de Nombre, Album, Duracion y Reproducciones
    tabla.innerHTML += filaPrincipal;

    // me traigo el valor del selector que quedó (osea me traigo la opcion que elegí)
    let tipoDeAlbumAFiltrar = document.querySelector("#tiposAlbums").value;

    // si la opcion es distinto de null, entro (pregunto si es distinto de null, por las dudas, costumbre de java jajaja)
    if (tipoDeAlbumAFiltrar != null) {
        
        // si la opcion que elegí es "TODOS", es porque quiero que me muestre todos los albums, entonces entro:
        if (tipoDeAlbumAFiltrar == "TODOS") {
             
            //hago un foreach recorriendo las canciones del array que cree arriba de todo y las agrego a una fila con sus respectivos atributos y luego las agrego a la tabla y luego al html
            canciones.forEach((item)=>{
                tabla.innerHTML +=`
                 <tr class="filas">
                    <td class="columna-play"><a href="reproduciendo.html"><img class="play-boton" src="../icons/playy.svg" alt="Play" title="Reproducir"></a></td>
                    <td class="columnas"><div class="celda-nombre-y-fav"><p class="nombre-cancion"> ${item.nombre} </p><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#606468" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><path d="M10.82,2.29c0.201,-0.475 0.667,-0.784 1.182,-0.784c0.516,0 0.982,0.309 1.183,0.784l2.394,5.66l6.029,0.846c0.499,0.07 0.911,0.424 1.053,0.907c0.143,0.483 -0.009,1.005 -0.39,1.334l-4.311,3.738l1.16,6.199c0.092,0.491 -0.109,0.99 -0.515,1.28c-0.406,0.291 -0.944,0.319 -1.378,0.074l-5.225,-2.949l-5.206,2.939c-0.438,0.247 -0.979,0.216 -1.385,-0.079c-0.407,-0.295 -0.604,-0.8 -0.505,-1.292l1.139,-5.668l-4.438,-4.276c-0.354,-0.341 -0.482,-0.854 -0.33,-1.321c0.151,-0.468 0.556,-0.807 1.043,-0.876l6.106,-0.856l2.394,-5.66Z"/></g></svg></div></td>
                    <td class="columnas"><div class="celda-nombre-y-fav"><p class="nombre-cancion"> ${item.album} </p><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#606468" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><path d="M10.82,2.29c0.201,-0.475 0.667,-0.784 1.182,-0.784c0.516,0 0.982,0.309 1.183,0.784l2.394,5.66l6.029,0.846c0.499,0.07 0.911,0.424 1.053,0.907c0.143,0.483 -0.009,1.005 -0.39,1.334l-4.311,3.738l1.16,6.199c0.092,0.491 -0.109,0.99 -0.515,1.28c-0.406,0.291 -0.944,0.319 -1.378,0.074l-5.225,-2.949l-5.206,2.939c-0.438,0.247 -0.979,0.216 -1.385,-0.079c-0.407,-0.295 -0.604,-0.8 -0.505,-1.292l1.139,-5.668l-4.438,-4.276c-0.354,-0.341 -0.482,-0.854 -0.33,-1.321c0.151,-0.468 0.556,-0.807 1.043,-0.876l6.106,-0.856l2.394,-5.66Z"/></g></svg></div></td>
                    <td class="columnas"> ${item.duracion} </td>
                    <td class="columnas"> ${item.reproducciones} </td>
                </tr>`;
            });
        } // si la opcion que elegí es "Album 1", "Album 2", "Album 3", "Album 4", entro al else:
        else{

            // creo un array filtrando las canciones segun su album comparandolo con la opcion que elegí del selector
                                         // por cada cancion --> dame su album --> comparalo con la opcion elegida   (si coincide, lo agrega al array nuevo)
            let cancionesFiltradas = canciones.filter(cancion => cancion.album == tipoDeAlbumAFiltrar);
            
            // recorro el array filtrado y con cada cancion, creo una fila con sus respectivos atributos, la agrego a la tabla y desp al html
            cancionesFiltradas.forEach((item)=>{
                tabla.innerHTML +=`
                 <tr class="filas">
                     <td class="columna-play"><a href="reproduciendo.html"><img class="play-boton" src="../icons/playy.svg" alt="Play" title="Reproducir"></a></td>
                     <td class="columnas"><div class="celda-nombre-y-fav"><p class="nombre-cancion"> ${item.nombre} </p><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#606468" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><path d="M10.82,2.29c0.201,-0.475 0.667,-0.784 1.182,-0.784c0.516,0 0.982,0.309 1.183,0.784l2.394,5.66l6.029,0.846c0.499,0.07 0.911,0.424 1.053,0.907c0.143,0.483 -0.009,1.005 -0.39,1.334l-4.311,3.738l1.16,6.199c0.092,0.491 -0.109,0.99 -0.515,1.28c-0.406,0.291 -0.944,0.319 -1.378,0.074l-5.225,-2.949l-5.206,2.939c-0.438,0.247 -0.979,0.216 -1.385,-0.079c-0.407,-0.295 -0.604,-0.8 -0.505,-1.292l1.139,-5.668l-4.438,-4.276c-0.354,-0.341 -0.482,-0.854 -0.33,-1.321c0.151,-0.468 0.556,-0.807 1.043,-0.876l6.106,-0.856l2.394,-5.66Z"/></g></svg></div></td>
                     <td class="columnas"><div class="celda-nombre-y-fav"><p class="nombre-cancion"> ${item.album} </p><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#606468" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><path d="M10.82,2.29c0.201,-0.475 0.667,-0.784 1.182,-0.784c0.516,0 0.982,0.309 1.183,0.784l2.394,5.66l6.029,0.846c0.499,0.07 0.911,0.424 1.053,0.907c0.143,0.483 -0.009,1.005 -0.39,1.334l-4.311,3.738l1.16,6.199c0.092,0.491 -0.109,0.99 -0.515,1.28c-0.406,0.291 -0.944,0.319 -1.378,0.074l-5.225,-2.949l-5.206,2.939c-0.438,0.247 -0.979,0.216 -1.385,-0.079c-0.407,-0.295 -0.604,-0.8 -0.505,-1.292l1.139,-5.668l-4.438,-4.276c-0.354,-0.341 -0.482,-0.854 -0.33,-1.321c0.151,-0.468 0.556,-0.807 1.043,-0.876l6.106,-0.856l2.394,-5.66Z"/></g></svg></div></td>
                     <td class="columnas"> ${item.duracion} </td>
                     <td class="columnas"> ${item.reproducciones} </td>
                 </tr>`;
            })
        }
    }
});