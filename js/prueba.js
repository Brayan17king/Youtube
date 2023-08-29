let searchAt = async () => {
    const input = document.querySelector("#search-box");
    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter' && document.activeElement === input) {
            const url = `https://youtube138.p.rapidapi.com/search/?q=${input.value}&hl=en&gl=US`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '986431733emsh883eea278a990ccp1bf9acjsne12807e528e0',
                    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                const valores = [result]
                console.log(valores);
                /*----------------------------------------------------------------------------------------*/
                const video1 = document.querySelector('.list-container');
                let index = 0; // Variable para realizar el seguimiento del índice de contents

                video1.innerHTML = valores
                    .map((value) => {
                        const content = value.contents[index]; // Obtener el contenido correspondiente
                        index++; // Incrementar el índice para la siguiente iteración
                        return /*html*/ `
                        <div class="vid-list">
                            <a href="#"><img src="${content.video.thumbnails[1].url}" class="thumbnail"></a>
                            <div class="flex-div">
                            <div class="vid-info">
                                <a href="play-video.html">${content.video.title}</a>
                                <p>${content.video.stats.views} views &bull; ${content.video.publishedTimeText}</p>
                            </div>
                            </div>
                        </div>
                        `;
                    })
                    .join("");
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    });

}

let page = async () => {
    let pageInformation = await searchAt();
    pageInformation = JSON.parse(pageInformation);

    let videoID = (pageInformation.contents[0]).video.videoId;

    // let videoInformacion = await videoInfo(videoID);
    // videoInformacion = JSON.parse(videoInformacion);

    // videoURL = `https://www.youtube.com/embed/${videoID}?&autoplay=1`;
    // const videoHTML = document.querySelector("#myVideo");
    // videoHTML.setAttribute('src', videoURL);

    // let videoRelacionados = await relatedVideo(videoID);
    // videoRelacionados = JSON.parse(videoRelacionados);
    // let relacionados = videoRelacionados.contents;

    // let videoComentarios = await comentario(videoID);
    // videoComentarios = JSON.parse(videoComentarios);
    // let comentarios = videoComentarios.contents;

    let recomendadosHTML = document.querySelector("#myRecomendados");
    recomendadosHTML.innerHTML = "";
    recomendadosHTML.insertAdjacentHTML("beforeend", /*html*/`
    <div class="recomendados">
        ${relacionados.map(value => {
        if (value.video) {
            return /*html*/`
                <div class="recomendados-box">
                    <img class="recomendados-miniatura" src="${value.video.thumbnails[0].url}" alt="Miniatura">
                    <div class="recomendados-informacion">
                        <div class="recomendados-title">${value.video.title}</div>
                        <div class="recomendados-channel">${value.video.author.title}</div>
                        <div class="d-flex justify-content-start">
                            <div class="recomendados-views">${value.video.stats.views} vistas <strong>·</strong></div>
                            <div class="recomendados-date">${value.video.publishedTimeText}</div>
                        </div>

                    </div>
                </div>
                `
        }
        else {
            return;
        }
    }).join("")}
    </div>`);
}

searchAt();