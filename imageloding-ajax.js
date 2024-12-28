//برقراری ارتباط با اجزای html
let data = [];
const maincontainer = document.querySelector('.main_containar');
const inputsearch = document.getElementById('search_filter');
const loading = document.querySelector('.loading');
let filtercharacter = '';
//تعریف تابع window.onload
window.onload = function () {
    const option = {
        url:"https://jsonplaceholder.typicode.com/photos"
        ,
        method: "GET",
        Header: {
            'Accept': "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
       
    };
    //روش برقرری ارتباط با سرور
    axios(option).then((res) => {
        data = res.data;
        console.log(res.status)
        console.log(res.data)
        showphoto();
    });
    inputsearch.addEventListener('input', function (event) {
        filtercharacter = event.target.value;
        console.log(filtercharacter)
        filterhandler();
    })
};
//تعریف متغیر showphoto  یا همان  additem
let showphoto = () => {
    data.map(item => {
        const eachphotodiv = document.createElement('div');
        const imagelement = document.createElement('img');
        const titleelement = document.createElement('span');


        eachphotodiv.classList.add('eachphotodiv');
        eachphotodiv.appendChild(imagelement);
        eachphotodiv.appendChild(titleelement);

        maincontainer.appendChild(eachphotodiv);
        imagelement.setAttribute('src', item.url);
        titleelement.innerHTML = item.title;
    });
    removeitem();

};

//تعریف متغیر removeitem
let removeitem = () => {
    let photolist = document.querySelectorAll('.main_containar div');

    for (item of photolist) {
        item.addEventListener('click', function () {
            this.remove();
        });
    }

};
//تعریف filterhandller
const filterhandler = () => {
    maincontainer.innerHTML = '';
    data.filter(item => item.title.toLowerCase().includes(filtercharacter.toLowerCase()))
        .forEach(item => {
            additem(item);
        });
};
//تعریف متغیر additem که همان showphoto هم هست
let additem = (item) => {
    const eachphotodiv = document.createElement('div');
    const imagelement = document.createElement('img');
    const titleelement = document.createElement('span');


    eachphotodiv.classList.add('eachphotodiv');
    eachphotodiv.appendChild(imagelement);
    eachphotodiv.appendChild(titleelement);

    maincontainer.appendChild(eachphotodiv);
    imagelement.setAttribute('src', item.url);
    titleelement.innerHTML = item.title;

};
//loadکردن بی نهایت
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, } = document.documentElement;

    loading.classList.add('show');
})

// const getnewitem = () = {
//     axios({
//         url: `https://jsonplaceholder.ir/photos/${Math.floor(Math.random() * 100 + 1)
// }`,
//          method: "GET",
//          Header: {
//              'Accept': "application/json",
//              "Content-Type": "application/json;charset=UTF - 8"
//          }
//      })
