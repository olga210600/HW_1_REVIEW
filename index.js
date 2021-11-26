const photosList = document.querySelector('.photos');
const getPostsBtn = document.querySelector('.addBtn');
let img = document.querySelectorAll('.clickable');
const wrapper = document.querySelector('.mainWrapper');

const state = {
    photos: [],
}

function getPhotos(skip, limit) {
    return fetch(`https://jsonplaceholder.typicode.com/photos?_start=${skip}&_limit=${limit}`, {
        headers: {
            "Content-type": "application/json: charset=YTF-8"
        }

    })
        .then((res) => res.json())
        .then((photos) => {
            state.photos = photos;
            loader.style.display = 'none';
            fillPostList(photos);
        })
}


function closeShowedImage() {
    console.log('remove ')
    wrapper.removeChild(document.querySelector('.showedImageWrapper'));
    wrapper.removeChild(document.querySelector('.blackCover'));
}


function showImage(index) {
    const clickedPhoto = state.photos[index];
    console.log('clickedPhoto: ', clickedPhoto)

    const blackCover = document.createElement('div');
    blackCover.className = 'blackCover'
    blackCover.onclick = closeShowedImage;

    const showedImageWrapper = document.createElement('div');
    showedImageWrapper.className = 'showedImageWrapper'
    //
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'imageWrapper'

    const closeIcon = document.createElement('span')
    closeIcon.innerHTML = "&#10006";
    closeIcon.className = 'closeIcon';
    closeIcon.onclick = closeShowedImage;

    const showedImage = document.createElement('img')
    showedImage.className = 'showedImage';
    showedImage.src = clickedPhoto.url;



    imageWrapper.appendChild(closeIcon);
    imageWrapper.appendChild(showedImage);
    showedImageWrapper.appendChild(imageWrapper);
    wrapper.appendChild(showedImageWrapper);
    wrapper.appendChild(blackCover);
    //
    // imageWrapper.appendChild(closeIcon);
    // imageWrapper.appendChild(showedImage);
    // wrapper.appendChild(imageWrapper);
    // wrapper.appendChild(blackCover);

    ///
    // showedImageWrapper.appendChild(imageWrapper);
    // wrapper.appendChild(imageWrapper);

}

const createPhotos = (photoItem, index) => `
            <div onclick="showImage(${index})" class = "photoWrapper">
                <div class="post">
                    <img class="clickable" src="${photoItem.url}"> 
                </div>
            </div>
        `

const fillPostList = (photos) => {
    photosList.innerHTML = "";

    if (photos.length) {
        photos.forEach((photo, index) => photosList.innerHTML += createPhotos(photo, index))
    }
}

document.addEventListener('DOMContentLoaded', () => showPagination(5000, 15), false);
