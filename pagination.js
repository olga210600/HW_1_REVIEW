// @ts-nocheck
const loader = document.getElementById('loader');

const Pagination = {
    code: '',
    Extend: function (data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
        Pagination.skip = data.skip || 0;
        Pagination.limit = data.limit;

        getPhotos(Pagination.skip, Pagination.limit);
        fillPostList(state.photos);
    },
    // add pages by number (from [s] to [f])
    Add: function (from, to) {
        for (let i = from; i < to; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },
    // add last page with separator
    Last: function () {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },
    // add first page with separator
    First: function () {
        Pagination.code += '<a>1</a><i>...</i>';
    },
    // change page
    Click: function () {
        loader.style.display = 'block'
        Pagination.page = +this.innerHTML;

        Pagination.ChangeSkip();
        Pagination.Start();
    },
    ChangeSkip: function () {
        if (Pagination.page >= 2) {
            Pagination.skip = (Pagination.page - 1) * Pagination.limit
        } else {
            Pagination.skip = 0;
        }

        getPhotos(Pagination.skip, Pagination.limit);
    },
    // previous page
    Prev: function () {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }

        Pagination.ChangeSkip();
        Pagination.Start();
    },
    // next page
    Next: function () {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }

        Pagination.ChangeSkip();
        Pagination.Start();
    },
    // binding pages
    Bind: function () {
        const a = Pagination.e.getElementsByTagName('a');

        for (let i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },
    // write pagination
    Finish: function () {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },
    // find pagination type
    Start: function () {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },
    // binding buttons
    Buttons: function (e) {
        const nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function (e) {
        const html = [
            '<a>&#9668;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#9658;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function (e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};

const showPagination = (totalCountUnits, limit) => {
    loader.style.display = 'block';

    Pagination.Init(document.getElementById('pagination'), {
        size: Math.ceil(totalCountUnits / limit), // pages size: ;
        page: 1,  // selected page
        step: 3,   // pages before and after current
        skip: 0,
        limit
    });
};

