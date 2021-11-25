const photosList = document.querySelector('.photos');
const getPostsBtn = document.querySelector('.addBtn');
let img = document.querySelectorAll('.clickable');

// console.log(img)
// const imgArray = []

const state = {
    photos: [],
}

const createPhotos = (photoItem) => {
    console.log('photos: ', photoItem)
    return `
    <div class = "photoWrapper">
        <div class="post">
<!--            <div class="wrapperBody">${photoItem.body}</div>-->
            <img class="clickable" src="${photoItem.url}"> 
        </div>
    </div>
       
`

//

}
// let arrayPhotos = photos
// console.log(arrayPhotos)

// window.addEventListener('load', function() {
//     let images = document.querySelectorAll('.clickable');
//     /* images - это NodeList, объект, похожий на обычный массив, но не совсем. Нам необходимо перебрать все элементы images и повесить им обработчик клика */
//     images.forEach(function(image) {
//         image.addEventListener('click', imageClickFunc);
//     });
//
//     /* Теперь осталось написать сам обработчик. Это обычная функция, для которой this будет кликнутый элемент */
//
//     function imageClickFunc() {
//         alert('Привет! Ты кликнул на ' + this);  // ну или любой другой код
//     }
// });


const fillPostList = (photos) => {
    photosList.innerHTML = "";

    if (photos.length) {
        photos.forEach((photo, index) => photosList.innerHTML += createPhotos(photo, index))
    }
    aaa = photos





// зашла в массив обьектов и получила id

    photos.forEach(elements => {
        if (elements.id === 124444){
            console.log('ttttttthere', true)
        }
        console.log(false)
    })


}

// aaa.addEventListener('mouseover', () => {
//     console.log('hey im therebbbbbbbbbbbbbbbbbbb')
// })


getPostsBtn.addEventListener('click', async () => {
    await getPhotos();
    fillPostList(state.photos);
    // console.log('juntyhntntyhnyt' ,state)
    //
    // imgArray.push(img)
    //
    // console.log('imggggg', imgArray)

})

// img.addEventListener('click', () =>{
//     console.log( Object.entries(state))
//
// })



function getPhotos() {
    return fetch('https://jsonplaceholder.typicode.com/photos?_limit=15', {
        headers: {
            "Content-type": "application/json: charset=YTF-8"
        }

    })
        .then((res) => res.json())
        .then((photos) => state.photos = photos)

}

// state.photos.push(getPhotos())
//
// console.log('photoss',state)
//
// // state.photos.forEach(element => console.log(  'elements', element[1]))

// console.log(arrImg)
