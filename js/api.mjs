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
const fetchData = async () => {
    try {
        // Realizar la solicitud y almacenar la respuesta en "response"
        const response = await axios.request(options);
        console.log(response.data);
        const url = (response.data.banner.desktop[5].url); // Mostrar los datos de la respuesta
        let seleccion = document.querySelector("#banner");
        seleccion.insertAdjacentHTML(
            "beforeend",
            /*html*/ `
            <img src="${url}">
            `
        );
        const info = document.querySelector('#info-sep')
        info.insertAdjacentHTML(
            "beforeend", /*html*/ `
                <div class="left">
                    <div class="img">
                        <img src="${response.data.avatar[0].url}" >
                    </div>
                    <div class="text">
                        <h2>${response.data.title}</h2>
                        <div class="text-p">
                            <p><span>${response.data.username}</span></p>
                            <p>${response.data.stats.subscribersText}</p>
                            <p>${response.data.stats.videosText}</p>
                        </div>
                        <div class="more-info">
                            <a href=""><p>More info about this channel</p></a>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="suscrito">
                        <i class='bx bx-bell' ></i>
                        <p>Subscribe</p>
                        <i class='bx bx-chevron-down'></i>
                    </div>
                </div>
                `
        )
    } catch (error) {
        console.error(error); // Mostrar el error si ocurre uno
    }
};

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
const optionsData2 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: 'P7nwKpy_C8E',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const optionsVideo2 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'P7nwKpy_C8E' },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

/*---------------------------------------------VIDEO-3--------------------------------------------------*/
const optionsData3 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: 'E6WrPNFH7Nw',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const optionsVideo3 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'E6WrPNFH7Nw' },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

/*---------------------------------------------VIDEO-4--------------------------------------------------*/
const optionsData4 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: 'rQsgjvsnqbQ',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const optionsVideo4 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'rQsgjvsnqbQ' },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

/*---------------------------------------------VIDEO-5--------------------------------------------------*/
const optionsData5 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: 'znYqquFE1To',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const optionsVideo5 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'znYqquFE1To' },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

/*---------------------------------------------VIDEO-6--------------------------------------------------*/
const optionsData6 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: 'qQCFGKhLk9E',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const optionsVideo6 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'qQCFGKhLk9E' },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

/*---------------------------------------------VIDEO-7--------------------------------------------------*/
const optionsData7 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: 'Kgn6HTq3uws',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const optionsVideo7 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'Kgn6HTq3uws' },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

/*---------------------------------------------VIDEO-8--------------------------------------------------*/
const optionsData8 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: 'onrQYHjX2y4',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const optionsVideo8 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'onrQYHjX2y4' },
    headers: {
        'X-RapidAPI-Key': '678c3bf7a6msh3b045e14c79d05cp1030e7jsndc75fdea6370',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const fetchDataVideo = async () => {
    try {
        const response = await axios.request(optionsData1);
        console.log(response.data);
        const video1 = document.querySelector('.list-container');
        video1.insertAdjacentHTML('beforeend', /*html*/ `
        <div class="vid-list">
            <a href="play-video.html"><img src="${response.data.thumbnails[3].url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="${response.data.author.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${response.data.title}</a>
                    <p>${response.data.stats.views} views &bull; ${response.data.publishedDate}</p>
                </div>
            </div>
        </div>
        `)

        const response2 = await axios.request(optionsData2);
        const video2 = document.querySelector('.list-container');
        video2.insertAdjacentHTML('beforeend', /*html*/ `
        <div class="vid-list">
            <a href="play-video.html"><img src="${response2.data.thumbnails[3].url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="${response.data.author.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${response2.data.title}</a>
                    <p>${response2.data.stats.views} views &bull; ${response2.data.publishedDate}</p>
                </div>
            </div>
        </div>
        `)

        const response3 = await axios.request(optionsData3);
        const video3 = document.querySelector('.list-container');
        video3.insertAdjacentHTML('beforeend', /*html*/ `
        <div class="vid-list">
            <a href="play-video.html"><img src="${response3.data.thumbnails[3].url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="${response.data.author.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${response3.data.title}</a>
                    <p>${response3.data.stats.views} views &bull; ${response3.data.publishedDate}</p>
                </div>
            </div>
        </div>
        `)

        const response4 = await axios.request(optionsData4);
        const video4 = document.querySelector('.list-container');
        video4.insertAdjacentHTML('beforeend', /*html*/ `
        <div class="vid-list">
            <a href="play-video.html"><img src="${response4.data.thumbnails[3].url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="${response.data.author.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${response4.data.title}</a>
                    <p>${response4.data.stats.views} views &bull; ${response4.data.publishedDate}</p>
                </div>
            </div>
        </div>
        `)

        const response5 = await axios.request(optionsData5);
        const video5 = document.querySelector('.list-container');
        video5.insertAdjacentHTML('beforeend', /*html*/ `
        <div class="vid-list">
            <a href="play-video.html"><img src="${response5.data.thumbnails[3].url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="${response.data.author.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${response5.data.title}</a>
                    <p>${response5.data.stats.views} views &bull; ${response5.data.publishedDate}</p>
                </div>
            </div>
        </div>
        `)

        const response6 = await axios.request(optionsData6);
        const video6 = document.querySelector('.list-container');
        video6.insertAdjacentHTML('beforeend', /*html*/ `
        <div class="vid-list">
            <a href="play-video.html"><img src="${response6.data.thumbnails[3].url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="${response.data.author.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${response6.data.title}</a>
                    <p>${response6.data.stats.views} views &bull; ${response6.data.publishedDate}</p>
                </div>
            </div>
        </div>
        `)

        const response7 = await axios.request(optionsData7);
        const video7 = document.querySelector('.list-container');
        video7.insertAdjacentHTML('beforeend', /*html*/ `
        <div class="vid-list">
            <a href="play-video.html"><img src="${response7.data.thumbnails[3].url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="${response.data.author.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${response7.data.title}</a>
                    <p>${response7.data.stats.views} views &bull; ${response7.data.publishedDate}</p>
                </div>
            </div>
        </div>
        `)

        const response8 = await axios.request(optionsData8);
        const video8 = document.querySelector('.list-container');
        video8.insertAdjacentHTML('beforeend', /*html*/ `
        <div class="vid-list">
            <a href="play-video.html"><img src="${response8.data.thumbnails[3].url}" class="thumbnail"></a>
            <div class="flex-div">
                <img src="${response.data.author.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${response8.data.title}</a>
                    <p>${response8.data.stats.views} views &bull; ${response8.data.publishedDate}</p>
                </div>
            </div>
        </div>
        `)



    } catch (error) {
        console.error(error);
    }
}

// fetchDataVideo();