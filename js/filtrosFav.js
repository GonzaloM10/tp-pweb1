// me traigo a la seccion en donde esta el mensaje de que no hay coincidencias (la uso muucho mas abajo pero la pongo aca porque sino la pierdo entre el codigo jajaj)
let seccion = document.querySelector("#seccionDelMensaje");

// aca creo las canciones con sus atributos
let canciones = [
    {
        "nombre": 'Bandido',
        "album": 'Album 1',
        "duracion": '1:50',
        "reproducciones": "2.000.000",
    },
    {
        "nombre": 'Rehúso',
        "album": 'Album 2',
        "duracion": '2:20',
        "reproducciones": "5.000.000",
    },
    {
        "nombre": 'Chamaquita',
        "album": 'Album 3',
        "duracion": '3:10',
        "reproducciones": "600.000",
    },
    {
        "nombre": 'La Nota',
        "album": 'Album 4',
        "duracion": '2:58',
        "reproducciones": "4.800.000",
    },
    {
        "nombre": 'Morocha',
        "album": 'Album 1',
        "duracion": '1:12',
        "reproducciones": "4.200.000",
    },
    {
        "nombre": 'One day',
        "album": 'Album 2',
        "duracion": '2:08',
        "reproducciones": "5.000.000",
    },
    {
        "nombre": 'Sweet Child On Mine',
        "album": 'Album 3',
        "duracion": '2:45',
        "reproducciones": "456.000",
    },
    {
        "nombre": 'Chocolate',
        "album": 'Album 4',
        "duracion": '1:56',
        "reproducciones": "4.000.000",
    },
    {
        "nombre": 'Linda',
        "album": 'Album 1',
        "duracion": '2:05',
        "reproducciones": "6.000.000",
    },
    {
        "nombre": 'Bzrp Session #46',
        "album": 'Album 2',
        "duracion": '13:01',
        "reproducciones": "27.000.000",
    },
    {
        "nombre": 'Playa del Inglés',
        "album": 'Album 3',
        "duracion": '5:40',
        "reproducciones": "1.200.000",
    },
    {
        "nombre": 'Ahora y siempre',
        "album": 'Album 4',
        "duracion": '2:58',
        "reproducciones": "4.800.000",
    },
    {
        "nombre": 'Maldición',
        "album": 'Album 1',
        "duracion": '1:39',
        "reproducciones": "4.050.000",
    },
    {
        "nombre": 'Inocente',
        "album": 'Album 2',
        "duracion": '1:01',
        "reproducciones": "200.000",
    },
    {
        "nombre": 'Universitaria',
        "album": 'Album 3',
        "duracion": '7:20',
        "reproducciones": "1.900.000",
    },
    {
        "nombre": 'Up & Up',
        "album": 'Album 4',
        "duracion": '3:05',
        "reproducciones": "4.108.000",
    },
    {
        "nombre": 'Luces',
        "album": 'Album 1',
        "duracion": '1:59',
        "reproducciones": "1.200.000",
    },
    {
        "nombre": 'Picky picky',
        "album": 'Album 2',
        "duracion": '3:40',
        "reproducciones": "720.000",
    },
    {
        "nombre": 'Una Foto',
        "album": 'Album 3',
        "duracion": '2:50',
        "reproducciones": "1.386.000",
    },
    {
        "nombre": 'Up & Up',
        "album": 'Album 4',
        "duracion": '4:13',
        "reproducciones": "158.000",
    },
    {
        "nombre": 'Amor clacificado',
        "album": 'Album 1',
        "duracion": '4:13',
        "reproducciones": "8.250.000",
    },
    {
        "nombre": 'Yellow',
        "album": 'Album 2',
        "duracion": '1:27',
        "reproducciones": "480.000",
    },
    {
        "nombre": 'Clocks',
        "album": 'Album 3',
        "duracion": '6:45',
        "reproducciones": "6.045.000",
    },
    {
        "nombre": 'Reasons',
        "album": 'Album 4',
        "duracion": '5:12',
        "reproducciones": "3.480.000",
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
// llamo a la funcion así no repito codigo
mostrarArray(canciones);

// me traigo el selector de albums del html por su id
let selectorAlbums = document.querySelector("#tiposAlbums");
let selectorDuracion = document.querySelector("#duracion");
let selectorReproducciones = document.querySelector("#reproducciones");
let botonFiltrar = document.querySelector("#btn-filtrar");

// cuando hago click en el boton filtrar, hago la funcion de filtrar
botonFiltrar.addEventListener("click", filtrar);


// esta es la funcion de filtrar
function filtrar(){
    borrarMensajeDeCoincidencia();

    // me traigo los VALORES en los que quedaron los selectores
    let valorDelSelectorAlbum = selectorAlbums.value;
    let valorDelSelectorDuracion = selectorDuracion.value;
    let valorDelSelectorReproducciones = selectorReproducciones.value;
    
    // limpio la tabla
    tabla.innerHTML = "";
    // agrego la primer fila donde aparecen las secciones de Nombre, Album, Duracion y Reproducciones
    tabla.innerHTML += filaPrincipal;
    
    // creo estos arrays:

    // este es para cuando se filtre segun lo que pedí
    let filtradas;

    // aca creo distintas copias del array original "canciones" segun los albunes, osea, tengo un array SOLO de albums 1, otro SOLO de albums 2 y asi, las creo para despues
    // dentro de los switch, poder usar estos arrays y no tener que estar filtrando cada dos por tres jeje
    let cancionesAlbum1 = canciones.filter(cancion => cancion.album == "Album 1");
    let cancionesAlbum2 = canciones.filter(cancion => cancion.album == "Album 2");
    let cancionesAlbum3 = canciones.filter(cancion => cancion.album == "Album 3");
    let cancionesAlbum4 = canciones.filter(cancion => cancion.album == "Album 4");

    // tengo un switch "principal" que evalua las opciones del primer selector que es el de los albums y asi sucesivamente, en cada caso, evalua el segundo selector de duracion
    // y en cada caso de ese selector de duracion evalua el selector de las reproducciones, serian switch dentro de otro switch deentro de otro switch jjajajaja medio complicado
    // de leer capaz pero si entendes el 'case: "TODOS" ', es lo mismo para tooodos los demas basicamente.

    switch (valorDelSelectorAlbum) {
        case "TODOS":
            switch (valorDelSelectorDuracion) {
                case "CualquierDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            mostrarArray(canciones); 
                            break;    
                        case "1":
                            filtradas = canciones.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = canciones.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000)
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "menorDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = canciones.filter(cancion => pasarASegundos(cancion.duracion) <= 120);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = canciones.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = canciones.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mediaDuracion":

                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = canciones.filter(cancion => pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = canciones.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = canciones.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mayorDuracion":

                    switch (valorDelSelectorReproducciones) {
    
                        case "TODAS":
                            filtradas = canciones.filter(cancion => pasarASegundos(cancion.duracion) >= 240);
                            mostrarArray(filtradas);
                            break;
    
                        case "1":
                            filtradas = canciones.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = canciones.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;
            }
            break;



        case "Album 1":
            switch (valorDelSelectorDuracion) {
                case "CualquierDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            mostrarArray(cancionesAlbum1); 
                            break;    
                        case "1":
                            filtradas = cancionesAlbum1.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum1.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000)
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "menorDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = cancionesAlbum1.filter(cancion => pasarASegundos(cancion.duracion) <= 120);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = cancionesAlbum1.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum1.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mediaDuracion":

                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = cancionesAlbum1.filter(cancion => pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = cancionesAlbum1.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum1.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mayorDuracion":

                    switch (valorDelSelectorReproducciones) {
    
                        case "TODAS":
                            filtradas = cancionesAlbum1.filter(cancion => pasarASegundos(cancion.duracion) >= 240);
                            mostrarArray(filtradas);
                            break;
    
                        case "1":
                            filtradas = cancionesAlbum1.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum1.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;
            }
            break;



        case "Album 2":
            switch (valorDelSelectorDuracion) {
                case "CualquierDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            mostrarArray(cancionesAlbum2); 
                            break;    
                        case "1":
                            filtradas = cancionesAlbum2.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum2.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000)
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "menorDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = cancionesAlbum2.filter(cancion => pasarASegundos(cancion.duracion) <= 120);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = cancionesAlbum2.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum2.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mediaDuracion":

                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = cancionesAlbum2.filter(cancion => pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = cancionesAlbum2.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum2.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mayorDuracion":

                    switch (valorDelSelectorReproducciones) {
    
                        case "TODAS":
                            filtradas = cancionesAlbum2.filter(cancion => pasarASegundos(cancion.duracion) >= 240);
                            mostrarArray(filtradas);
                            break;
    
                        case "1":
                            filtradas = cancionesAlbum2.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum2.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;
            }
            break;



        case "Album 3":
            switch (valorDelSelectorDuracion) {
                case "CualquierDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            mostrarArray(cancionesAlbum3); 
                            break;    
                        case "1":
                            filtradas = cancionesAlbum3.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum3.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000)
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "menorDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = cancionesAlbum3.filter(cancion => pasarASegundos(cancion.duracion) <= 120);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = cancionesAlbum3.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum3.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mediaDuracion":

                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = cancionesAlbum3.filter(cancion => pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = cancionesAlbum3.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum3.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mayorDuracion":

                    switch (valorDelSelectorReproducciones) {
    
                        case "TODAS":
                            filtradas = cancionesAlbum3.filter(cancion => pasarASegundos(cancion.duracion) >= 240);
                            mostrarArray(filtradas);
                            break;
    
                        case "1":
                            filtradas = cancionesAlbum3.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum3.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;
            }
            break;



        case "Album 4":
            switch (valorDelSelectorDuracion) {
                case "CualquierDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            mostrarArray(cancionesAlbum4); 
                            break;    
                        case "1":
                            filtradas = cancionesAlbum4.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum4.filter(cancion=> pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000)
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "menorDuracion":
                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = cancionesAlbum4.filter(cancion => pasarASegundos(cancion.duracion) <= 120);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = cancionesAlbum4.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum4.filter(cancion=> pasarASegundos(cancion.duracion) <= 120  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mediaDuracion":

                    switch (valorDelSelectorReproducciones) {

                        case "TODAS":
                            filtradas = cancionesAlbum4.filter(cancion => pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240);
                            mostrarArray(filtradas);
                            break;

                        case "1":
                            filtradas = cancionesAlbum4.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum4.filter(cancion=> pasarASegundos(cancion.duracion) >= 120 && pasarASegundos(cancion.duracion) <= 240  && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;

                case "mayorDuracion":

                    switch (valorDelSelectorReproducciones) {
    
                        case "TODAS":
                            filtradas = cancionesAlbum4.filter(cancion => pasarASegundos(cancion.duracion) >= 240);
                            mostrarArray(filtradas);
                            break;
    
                        case "1":
                            filtradas = cancionesAlbum4.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) <=1500000);
                            mostrarArray(filtradas);
                            break;
                        case "2":
                            filtradas = cancionesAlbum4.filter(cancion=> pasarASegundos(cancion.duracion) >= 240 && pasarDeStringANumerosLasReproducciones(cancion.reproducciones) >=4000000);            
                            mostrarArray(filtradas);
                            break;
                    }
                    break;
            }
            break;
    }
}








// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// creo una funcion (un metodo) para que inserte una fila a la tabla de html segun el array que le paso así reutilizo codigo
function mostrarArray(arrayRecibido){

    // esto lo hago para que la barra de reproduccion, no se despegue del footer porque por ejemplo, si las canciones que me va a mostrar, son 2, la barra subia y quedaba feo,
    // otro ejemplo es cuando te aparece el error de que no hya coincidencias, entonces la barra tambieen se despegaba del footer, entonces con estos ifs, lo que hago es que
    // cuando las canciones que me va a mostrar, son menores o igual a 4, entonces ajusto el margin top de la barra para que quede pegado al footer, entonces, segun cuantas 
    // canciones tenga el array, le pondrá mas margin o menos o directamente, si el array NO tiene menos de 4 canciones, le saca el margin (osea, se lo deja en 0)
    let barraDeReproduccion = document.querySelector("#barra-reproduccion");
    if (arrayRecibido.length <= 4) {

        if (arrayRecibido.length === 0) {
            barraDeReproduccion.style.marginTop = "20.8em";
            console.log("SE CAMBIO EL MARGIN A 20.8EM");
        }else if (arrayRecibido.length === 1) {
            barraDeReproduccion.style.marginTop = "23em";
            console.log("SE CAMBIO EL MARGIN A 23EM");
        }else if (arrayRecibido.length === 2 || arrayRecibido.length === 3) {
            barraDeReproduccion.style.marginTop = "17em";
            console.log("SE CAMBIO EL MARGIN A 17EM"); 
        }else if (arrayRecibido.length === 4) {
            barraDeReproduccion.style.marginTop = "0em";
            console.log("SE CAMBIO EL MARGIN A 0EM");
        }
    }
    else{
        barraDeReproduccion.style.marginTop = "0em";
        console.log("SE ELIMINÓ EL MARGIN");
    }

    // si el array esta vacio, significa que no se filtró ninguna cancion con los filtros que pusiste, entonces te mando un mensaje de que no se encontraron canciones con esos filtros
    if (arrayRecibido.length === 0) {
        seccion.innerHTML +=`<p class="mensaje-de-nunguna-coincidencia" id="mensaje-sin-coincidencias">¡No  encontramos  coincidencias  con  los  filtros  proporcionados!</p></td>`;
    }else{
        // ahora, si el array NO esta vacio, significa que almenos 1 cancion se filtro, entonces te muestro esa cancion/es 
        arrayRecibido.forEach((cancion)=>{
            tabla.innerHTML +=`
            <tr class="filas">
            <td class="columna-play"><a href="reproduciendo.html"><img class="play-boton" src="../icons/playy.svg" alt="Play" title="Reproducir"></a></td>
            <td class="columnas"><div class="celda-nombre-y-fav"><p class="nombre-cancion"> ${cancion.nombre} </p><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#606468" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><path d="M10.82,2.29c0.201,-0.475 0.667,-0.784 1.182,-0.784c0.516,0 0.982,0.309 1.183,0.784l2.394,5.66l6.029,0.846c0.499,0.07 0.911,0.424 1.053,0.907c0.143,0.483 -0.009,1.005 -0.39,1.334l-4.311,3.738l1.16,6.199c0.092,0.491 -0.109,0.99 -0.515,1.28c-0.406,0.291 -0.944,0.319 -1.378,0.074l-5.225,-2.949l-5.206,2.939c-0.438,0.247 -0.979,0.216 -1.385,-0.079c-0.407,-0.295 -0.604,-0.8 -0.505,-1.292l1.139,-5.668l-4.438,-4.276c-0.354,-0.341 -0.482,-0.854 -0.33,-1.321c0.151,-0.468 0.556,-0.807 1.043,-0.876l6.106,-0.856l2.394,-5.66Z"/></g></svg></div></td>
            <td class="columnas"><div class="celda-nombre-y-fav"><p class="nombre-cancion"> ${cancion.album} </p><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#606468" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><path d="M10.82,2.29c0.201,-0.475 0.667,-0.784 1.182,-0.784c0.516,0 0.982,0.309 1.183,0.784l2.394,5.66l6.029,0.846c0.499,0.07 0.911,0.424 1.053,0.907c0.143,0.483 -0.009,1.005 -0.39,1.334l-4.311,3.738l1.16,6.199c0.092,0.491 -0.109,0.99 -0.515,1.28c-0.406,0.291 -0.944,0.319 -1.378,0.074l-5.225,-2.949l-5.206,2.939c-0.438,0.247 -0.979,0.216 -1.385,-0.079c-0.407,-0.295 -0.604,-0.8 -0.505,-1.292l1.139,-5.668l-4.438,-4.276c-0.354,-0.341 -0.482,-0.854 -0.33,-1.321c0.151,-0.468 0.556,-0.807 1.043,-0.876l6.106,-0.856l2.394,-5.66Z"/></g></svg></div></td>
            <td class="columnas"> ${cancion.duracion} </td>
            <td class="columnas"> ${cancion.reproducciones} </td>
            </tr>`;
        })
    }


    // despues de poner las canciones, si mostré MENOS de 5 canciones, te saco la flechita del ancla pq no hay un scroll "largo" como para que haya un ancla, ahora, pero si hay 
    // MAS de 5 canciones, SI que te muestro la flechita para ir arriba, no es necesario, pero suma je
    let irArriba = document.querySelector(".flechaIrArriba");
    if (arrayRecibido.length < 5) {
        irArriba.style.display = "none";
    }else{
        irArriba.style.display = "block";
    }
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// creo esta funcion para poder pasar del string de minutos a un int asi lo puedo comparar con otros minutos
function pasarASegundos(valorAConvertir){
    // lo separo a partir de los dos puntos, osea, se me crea un array con la primer parte antes de los dos : (osea los minutos) y otra con la 2da parte despues de los : (osea, los segundos)
    let valorSeparado = valorAConvertir.split(":");
    // paso a enteros la primer parte que serian los minutos
    let minutos = parseInt(valorSeparado[0]);
    // parseo a enteros la segunda parte que serian los segundos
    let segundos = parseInt(valorSeparado[1]);
    
    // mi tiempo final, multiplico la cant de minutos por 60 segundos y le sumo los segundos de la 2da parte
    let tiempoFinalEnSegundos = (minutos*60)+segundos;

    // devuelvo el tieepo final
    return tiempoFinalEnSegundos;
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// creo esta funcion porque habiamos pueso toodas las reproducciones como strings entonces para poder compararlas en los switch, las paso a numero
function pasarDeStringANumerosLasReproducciones(cadenaAConvertir){
    // aca creo esta expresion que hace que, primero abro la expresion con el "/", despues que busque puntos "\." y cierra la expresion "/" bueno, esa expresion, quiero que la
    // haga de forma global "g" osea, que no busque un solo punto y corte, sino que busque TOOODOS los puntos que haya en la cadena
    let expresion = /\./g;

    // y aca primero le digo que la cadena que me pasaste por parametro, le reemplazo, lo que encuentre con la expresion regular, que la reemplaze por vacio '' y despues de que 
    // haya hecho eso, que parsee esa cadena que quedó a int
    let cadenaFinalSinPuntosYParseadaAEnteros= parseInt(cadenaAConvertir.replace(expresion, ''));

    // y la devuelvo
    return cadenaFinalSinPuntosYParseadaAEnteros;
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------  ESTA ES LA PARTE PARA CUANDO APRETAS EL BOTON DE "LIMPIAR FILTROS"   --------------------------------------------------------------------------------------

// llamo al boton de LIMPIAR
let botonLimpiarFiltros = document.querySelector("#btn-limpiar-filtros");

// cuando  hago click en el boton, ejecuto la funcion de limpiarSelectoresYActualizar
botonLimpiarFiltros.addEventListener("click", limpiarSelectoresYActualizar);

// esta es la funcion para limpiar los selectores
function limpiarSelectoresYActualizar(){

    // aca le digo al selector de albums (el cual lo llamé arriba de toooodo), que tome como posicion, la 0, (seria como un array asiq de todas sus posiciones, que vaya a la 0 que es la de todos los albums)
    selectorAlbums.selectedIndex = 0;
    // aca le digo al selector de duración (el cual lo llamé arriba de toooodo), que tome como posicion, la 0, (seria como un array asiq de todas sus posiciones, que vaya a la 0 que es la de cualquier duración)
    selectorDuracion.selectedIndex = 0;
    // aca le digo al selector de reproducciones (el cual lo llamé arriba de toooodo), que tome como posicion, la 0, (seria como un array asiq de todas sus posiciones, que vaya a la 0 que es la de todas las canciones)
    selectorReproducciones.selectedIndex = 0;

    borrarMensajeDeCoincidencia();

    // por ultimo, si se eliminó el mensaje porque lo habiá o no se removió nada porque NO habia, filtro igualmente
    filtrar();
}
// y filtro nuevamente con las opciones que quedaron de los selectores

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function borrarMensajeDeCoincidencia(){
    // para limpiar, me fijo si primero está el mensaje de que no hay considencias, asique primero me traigo el mensaje por su id
    let parrafoInsertado = document.getElementById("mensaje-sin-coincidencias");
    
    // si al buscarlo, lo encontré, entonces lo remuevo y luego filtro
    if (parrafoInsertado) {

        // aca, le digo a la seccion que contiene el mensaje que remueva a su hijo que tenga de id "parrafoInsertado"
        seccion.removeChild(parrafoInsertado);
    }
}