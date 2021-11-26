    const photosList = document.querySelector('.photos');
    const getPostsBtn = document.querySelector('.addBtn');
    let img = document.querySelectorAll('.clickable');
    const wrapper = document.querySelector('.mainWrapper');

    const state = {
        photos: [],
    }

    function getPhotos() {
        return fetch('https://jsonplaceholder.typicode.com/photos?_limit=15', {
            headers: {
                "Content-type": "application/json: charset=YTF-8"
            }

        })
            .then((res) => res.json())
            .then((photos) => state.photos = photos)
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

        const closeIcon = document.createElement('span')
        closeIcon.innerHTML = "&#10006";
        closeIcon.className = 'closeIcon';
        closeIcon.onclick = closeShowedImage;

        const showedImage = document.createElement('img')
        showedImage.className = 'showedImage';
        showedImage.src = clickedPhoto.url;

        showedImageWrapper.appendChild(closeIcon);
        showedImageWrapper.appendChild(showedImage);
        wrapper.appendChild(showedImageWrapper);
        wrapper.appendChild(blackCover);
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

    getPostsBtn.addEventListener('click', async () => {
        await getPhotos();
        fillPostList(state.photos);
    })

//////////////////////////////////////////
//     function paginate{
//         totalItems: 15,
//         currentPage: number = 1,
//         pageSize: number = 10,
//         maxPages: number = 10
//     } {
//         // calculate total pages
//         let totalPages = Math.ceil(totalItems / pageSize);
//
//         // ensure current page isn't out of range
//         if (currentPage < 1) {
//             currentPage = 1;
//         } else if (currentPage > totalPages) {
//             currentPage = totalPages;
//         }
//
//         let startPage: number, endPage: number;
//         if (totalPages <= maxPages) {
//             // total pages less than max so show all pages
//             startPage = 1;
//             endPage = totalPages;
//         } else {
//             // total pages more than max so calculate start and end pages
//             let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
//             let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
//             if (currentPage <= maxPagesBeforeCurrentPage) {
//                 // current page near the start
//                 startPage = 1;
//                 endPage = maxPages;
//             } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
//                 // current page near the end
//                 startPage = totalPages - maxPages + 1;
//                 endPage = totalPages;
//             } else {
//                 // current page somewhere in the middle
//                 startPage = currentPage - maxPagesBeforeCurrentPage;
//                 endPage = currentPage + maxPagesAfterCurrentPage;
//             }
//         }
//
//         // calculate start and end item indexes
//         let startIndex = (currentPage - 1) * pageSize;
//         let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
//
//         // create an array of pages to ng-repeat in the pager control
//         let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
//
//         // return object with all pager properties required by the view
//         return {
//             totalItems: totalItems,
//             currentPage: currentPage,
//             pageSize: pageSize,
//             totalPages: totalPages,
//             startPage: startPage,
//             endPage: endPage,
//             startIndex: startIndex,
//             endIndex: endIndex,
//             pages: pages
//         };
//     }
//
//     export = paginate;