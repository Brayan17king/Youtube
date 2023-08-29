const key = "e9c20ad1b3mshaf50c97b5d699fbp1e7529jsn0606e4cb468d"

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
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};
const optionsVideo1 = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/streaming-data/',
    params: { id: 'izvodnnCvt0' },
    headers: {
        'X-RapidAPI-Key': key,
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
        'X-RapidAPI-Key': key,
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
        'X-RapidAPI-Key': key,
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
        'X-RapidAPI-Key': key,
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
        'X-RapidAPI-Key': key,
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
        'X-RapidAPI-Key': key,
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
        'X-RapidAPI-Key': key,
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
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const fetchDataVideo = async () => {
    try {
        const response = await axios.request(optionsVideo1);
        const response1 = await axios.request(optionsData1);
        // console.log(response.data);
        // console.log(response1.data);
        const response2 = await axios.request(optionsData2);
        const response3 = await axios.request(optionsData3);
        const response4 = await axios.request(optionsData4);
        const response5 = await axios.request(optionsData5);
        const response6 = await axios.request(optionsData6);
        const response7 = await axios.request(optionsData7);
        const response8 = await axios.request(optionsData8);

        const vid1 = document.querySelector('#row');
        vid1.insertAdjacentHTML('beforeend', /*html*/`
        <div class="play-video">
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/izvodnnCvt0?si=7vfryn5ETV0juOot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           

            <div class="tags">
                <a href="">#Coding</a>
                <a href="">#HTML</a>
                <a href="">#CSS</a>
                <a href="">#C#</a>
            </div>
            <h3>${response1.data.title}</h3>
            <div class="play-video-info">
                <p>${response1.data.stats.views} views &bull; ${response1.data.publishedDate}</p>
                <div>
                    <a href=""><img src="images/like.png">${response1.data.stats.likes}</a>
                    <a href=""><img src="images/dislike.png"></a>
                    <a href=""><img src="images/share.png">Share</a>
                    <a href=""><img src="images/save.png">Save</a>
                </div>
            </div>
            <hr>
            <div class="plublisher">
                <img src="images/Jack.png">
                <div>
                    <p>${response1.data.author.title}</p>
                    <span>${response1.data.stats.suscribers} Subscribers</span>
                </div>
                <button type="button">Subscribe</button>
            </div>
            <div class="vid-description">
                <p>Channel that makes learning easy</p>
                <p>${response1.data.description}</p>
                <hr>
                <h4>123 Comments</h4>

                <div class="add-comment">
                    <img src="images/Jack.png">
                    <input type="text" placeholder="Write Comments...">
                </div>

                <div class="old-comment">
                    <img src="images/Jack.png">
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>A global computer network providing a variety of information
                            and communication facilities, consisting of interconnected
                            networks using standardized communication protocols.
                        </p>
                        <div class="acomment-action">
                            <img src="images/like.png">
                            <span>244</span>
                            <img src="images/dislike.png">
                            <span>2</span>
                            <span>REPLY</span>
                            <a href="">All Replaces</a>
                        </div>
                    </div>
                </div>

                <div class="old-comment">
                    <img src="images/Jack.png">
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>A global computer network providing a variety of information
                            and communication facilities, consisting of interconnected
                            networks using standardized communication protocols.
                        </p>
                        <div class="acomment-action">
                            <img src="images/like.png">
                            <span>244</span>
                            <img src="images/dislike.png">
                            <span>2</span>
                            <span>REPLY</span>
                            <a href="">All Replaces</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="right-sidebar">

            <div class="side-video-list">
                <a href="" class="small-thumbnail"><img src="${response1.data.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="">${response1.data.title}</a>
                    <p>${response1.data.author.title}</p>
                    <p>${response1.data.stats.views} Views</p>
                </div>
            </div>
        
            <div class="side-video-list">
                <a href="" class="small-thumbnail"><img src="${response2.data.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="">${response2.data.title}</a>
                    <p>${response2.data.author.title}</p>
                    <p>${response2.data.stats.views} Views</p>
                </div>
            </div>

            <div class="side-video-list">
                <a href="" class="small-thumbnail"><img src="${response3.data.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="">${response3.data.title}</a>
                    <p>${response3.data.author.title}</p>
                    <p>${response3.data.stats.views} Views</p>
                </div>
            </div>

            <div class="side-video-list">
                <a href="" class="small-thumbnail"><img src="${response4.data.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="">${response4.data.title}</a>
                    <p>${response4.data.author.title}</p>
                    <p>${response4.data.stats.views} Views</p>
                </div>
            </div>

            <div class="side-video-list">
                <a href="" class="small-thumbnail"><img src="${response5.data.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="">${response5.data.title}</a>
                    <p>${response5.data.author.title}</p>
                    <p>${response5.data.stats.views} Views</p>
                </div>
            </div>

            <div class="side-video-list">
                <a href="" class="small-thumbnail"><img src="${response6.data.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="">${response6.data.title}</a>
                    <p>${response6.data.author.title}</p>
                    <p>${response6.data.stats.views} Views</p>
                </div>
            </div>

            <div class="side-video-list">
                <a href="" class="small-thumbnail"><img src="${response7.data.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="">${response7.data.title}</a>
                    <p>${response7.data.author.title}</p>
                    <p>${response7.data.stats.views} Views</p>
                </div>
            </div>

            <div class="side-video-list">
                <a href="" class="small-thumbnail"><img src="${response8.data.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="">${response8.data.title}</a>
                    <p>${response8.data.author.title}</p>
                    <p>${response8.data.stats.views} Views</p>
                </div>
            </div>
        </div>
        `)

    } catch (error) {
        console.error(error);
    }
}

fetchDataVideo();

let searchAt = async () => {
    const input = document.querySelector("#search-box");
    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter' && document.activeElement === input) {
            const url = `https://youtube138.p.rapidapi.com/search/?q=${input.value}&hl=en&gl=US`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': key,
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
                video1.innerHTML = valores
                    .map((value) => {
                        return /*html*/ `
                        <div class="vid-list">
                            <a href="#"><img src="${value.contents[0].video.thumbnails[1].url}" class="thumbnail"></a>
                            <div class="flex-div">
                            <div class="vid-info">
                                <a href="play-video.html">${value.contents[0].video.title}</a>
                                <p>${value.contents[0].video.stats.views} views &bull; ${value.contents[0].video.publishedTimeText}</p>
                            </div>
                            </div>
                            <div class="vid-list">
                            <a href="#"><img src="${value.contents[1].video.thumbnails[1].url}" class="thumbnail"></a>
                            <div class="flex-div">
                            <div class="vid-info">
                                <a href="play-video.html">${value.contents[1].video.title}</a>
                                <p>${value.contents[1].video.stats.views} views &bull; ${value.contents[1].video.publishedTimeText}</p>
                            </div>
                            </div>
                            </div>
                            <div class="vid-list">
                            <a href="#"><img src="${value.contents[2].video.thumbnails[1].url}" class="thumbnail"></a>
                            <div class="flex-div">
                            <div class="vid-info">
                                <a href="play-video.html">${value.contents[2].video.title}</a>
                                <p>${value.contents[2].video.stats.views} views &bull; ${value.contents[2].video.publishedTimeText}</p>
                            </div>
                            </div>
                            </div>
                            <div class="vid-list">
                            <a href="#"><img src="${value.contents[3].video.thumbnails[1].url}" class="thumbnail"></a>
                            <div class="flex-div">
                            <div class="vid-info">
                                <a href="play-video.html">${value.contents[3].video.title}</a>
                                <p>${value.contents[3].video.stats.views} views &bull; ${value.contents[3].video.publishedTimeText}</p>
                            </div>
                            </div>
                            </div>
                            <div class="vid-list">
                            <a href="#"><img src="${value.contents[4].video.thumbnails[1].url}" class="thumbnail"></a>
                            <div class="flex-div">
                            <div class="vid-info">
                                <a href="play-video.html">${value.contents[4].video.title}</a>
                                <p>${value.contents[4].video.stats.views} views &bull; ${value.contents[4].video.publishedTimeText}</p>
                            </div>
                            </div>
                            </div>
                            <div class="vid-list">
                            <a href="#"><img src="${value.contents[5].video.thumbnails[1].url}" class="thumbnail"></a>
                            <div class="flex-div">
                            <div class="vid-info">
                                <a href="play-video.html">${value.contents[5].video.title}</a>
                                <p>${value.contents[5].video.stats.views} views &bull; ${value.contents[5].video.publishedTimeText}</p>
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


searchAt();