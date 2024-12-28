let data = [];
const maincontainar = document.querySelector('.main_containar');
const searchfilter = document.getElementById('search_filter');
const loading = document.querySelector('.loading');
let filtercharacter = '';

//تعریف تابع onload
window.onload = function () {
    const option = {
        url: "https://jsonplaceholder.ir/photos",  
        method: "GET",
        Header: {
            'Accept': "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: {
            name: 'hamed',
            number: '0918251351331'
        }
    }

    //روش برقراری ارتباط با سرور-درخواست فرستادن
    axios(option).then((res) => {
        data = res.data;
        // console.log(res.status)
        showphoto();
    });

    //استفاده از تابع فیلتر
    searchfilter.addEventListener('input', function (event) {
        filtercharacter = event.target.value;
        console.log(filtercharacter)
        filterhandller();
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
        maincontainar.appendChild(eachphotodiv);
        imagelement.setAttribute('src', item.url);
        titleelement.innerHTML = item.title;

    });
    removeitem();
};
// //تعریف متغیر remove
let removeitem = () => {
    let photolist = document.querySelectorAll('.main_containar div');
    for (item of photolist) {
        item.addEventListener('click', function () {
            this.remove();
        });
    }
};
// //تعریف تابع فیلتر
const filterhandller = () => {
    maincontainar.innerHTML = '';
    data.filter(item => item.title.toLowerCase().includes(filtercharacter.toLowerCase()))
        .forEach(item => {
            additem(item);
        });
};
let additem = (item) => {
    const eachphotodiv = document.createElement('div');
    const imagelement = document.createElement('img');
    const titleelement = document.createElement('span');

    eachphotodiv.classList.add('eachphotodiv');
    eachphotodiv.appendChild(imagelement);
    eachphotodiv.appendChild(titleelement);

    maincontainar.appendChild(eachphotodiv);
    imagelement.setAttribute('src', item.url);
    titleelement.innerHTML = item.title;
};
// نحوه تعریف کردن ابجکت در جاوا اسکریپت
const myobj={ title:'fatemeh' , id:1 ,age:24}
let mytitle=myobj.title;
let myage=myobj.age;
let myid=myobj.id;
console.log(mytitle , myage  ,myid)
window.addEventListener('scroll', function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log({ scrollTop, scrollHeight, clientHeight })

    // console.log({ scrollTop, scrollHeight, clientHeight } );
    if (scrollTop + clientHeight >= scrollHeight - 200) {

        timinggetnewitem();
    }
})

const timinggetnewitem = () => {
    loading.classList.add('show');
    setTimeout(getnewitems, 3000)
}
const getnewitems = () => {



    axios({
        url: `https://jsonplaceholder.ir/photos/${Math.floor(Math.random() * 100 + 1)}`,
        method: "GET",
        Header: {
            'Accept': "application/json",
            "Content-Type": "application/json;charset=UTF - 8",
        }
    }).then((res) => {
        //console.log(res.data)
        additem(res.data)
    })

}





// let data = [];
// window.onload = function () {
//     const option = {
//         url: "https://jsonplaceholder.ir/photos",  
//         method: "GET",
//         Header: {
//             'Accept': "application/json",
//             "Content-Type": "application/json;charset=UTF - 8",
//         },
//         data: {
//             name: 'hamed',
//             number: '0918251351331'
//         }
//     }

//     //روش برقراری ارتباط با سرور-درخواست فرستادن
//     axios(option).then((res) => {
//         data = res.data;
//         console.log(res.status)
//         console.log(res.data)
//         showphoto();
//     });
// }