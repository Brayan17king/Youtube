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
        'X-RapidAPI-Key': '75cc60b782mshdd311bde65a63acp11f5d5jsn6151c7453f97', // Tu clave de API
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
//     } catch (error) {
//         console.error(error); // Mostrar el error si ocurre uno
//     }
// };

// Llamar a la función para realizar la solicitud
fetchData();

