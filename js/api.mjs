// Configurar las opciones para la solicitud HTTP
const options = {
    method: 'GET', // Método de solicitud: GET
    url: 'https://youtube138.p.rapidapi.com/channel/details/', // URL de la API
    params: {
        id: 'UC8fkwsjcI_MhralEX1g4OBw', // Consulta de id / Canal del profesor
        hl: 'en',  // Idioma: inglés
        gl: 'US'   // Región: Estados Unidos
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370', // Tu clave de API
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com' // El host de RapidAPI
    }
};

// Función para realizar la solicitud HTTP
// const fetchData = async () => {
//     try {
//         // Realizar la solicitud y almacenar la respuesta en "response"
//         const response = await axios.request(options);
//         console.log(response.data);
//         const url = (response.data.banner.desktop[5].url); // Mostrar los datos de la respuesta
//         let seleccion = document.querySelector("#banner");
//         seleccion.insertAdjacentHTML(
//             "beforeend",
//             /*html*/ `
//             <img src="${url}">
//             `
//         );
//         const info = document.querySelector('#info-sep')
//         info.insertAdjacentHTML(
//             "beforeend", /*html*/ `
//                 <div class="left">
//                     <div class="img">
//                         <img src="${response.data.avatar[0].url}" >
//                     </div>
//                     <div class="text">
//                         <h2>${response.data.title}</h2>
//                         <div class="text-p">
//                             <p><span>${response.data.username}</span></p>
//                             <p>${response.data.stats.subscribersText}</p>
//                             <p>${response.data.stats.videosText}</p>
//                         </div>
//                         <div class="more-info">
//                             <a href=""><p>More info about this channel</p></a>
//                             <i class='bx bx-chevron-right'></i>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="right">
//                     <div class="suscrito">
//                         <i class='bx bx-bell' ></i>
//                         <p>Subscribe</p>
//                         <i class='bx bx-chevron-down'></i>
//                     </div>
//                 </div>
//                 `
//         )
//     } catch (error) {
//         console.error(error); // Mostrar el error si ocurre uno
//     }
// };

// Llamar a la función para realizar la solicitud
// fetchData();

/*---------------------------------------------VIDEO-1--------------------------------------------------*/
const optionsData1 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: 'izvodnnCvt0',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const optionsVideo1 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'izvodnnCvt0' },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

/*---------------------------------------------VIDEO-2--------------------------------------------------*/



const fetchDataVideo = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);

    } catch (error) {
        console.error(error);
    }
} 