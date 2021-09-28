
const form = document.querySelector('.search-form');
const searchInput = document.getElementById('search');
const removeInput = document.getElementById('remove-btn');
const imgContainer = document.getElementById('img-container');

async function getGif(q) {
    const gifObj = {
        q,
        api_key: 'SefRxg9GczzVc4GjXaYZ08JbrQRRK3Cd',
    };
    
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: gifObj } );

    const gifDatas = res.data.data;
    // console.log(gifDatas);
    const randNum = Math.floor(Math.random() * gifDatas.length);

    const imgURL = gifDatas[randNum].images.original.url;
    const newImg = document.createElement('img');
    newImg.src = imgURL;

    const newDiv = document.createElement('div');

    newDiv.classList.add('giphy');
    newDiv.append(newImg);
    imgContainer.append(newDiv);

}

function addGif(e) {
    console.log(e);
    e.preventDefault();
    if(searchInput.value) {
        getGif(searchInput.value);
    }
    searchInput.value = '';
}

function removeGifs() {
    imgContainer.innerHTML = '';
}


form.addEventListener('submit', addGif);

removeInput.addEventListener('click', removeGifs);