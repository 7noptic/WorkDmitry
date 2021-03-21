'use script';
import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import Readmore from "readmore-js";
import GLightbox from 'glightbox';

Swiper.use([Navigation, Pagination, Autoplay]);


window.addEventListener('DOMContentLoaded', () => {
   

    /* MODAL */
     let modalBlock = document.querySelector('.js-sidebars'),
     header = document.querySelector('.header'),
     footer = document.querySelector('.footer'),
     main = document.querySelector('main'),
     allModal = document.querySelectorAll('.js-sidebars > section'),
     modalCall = document.querySelector('.modal-call'),
     modalRegion = document.querySelector('.modal-region'),
     modalOneClick = document.querySelector('.modal-one-click'),
     modalAssortment = document.querySelector('.modal-assortment'),
     modalJob = document.querySelector('.modal-job'),
     modalSubscribe = document.querySelector('.modal-subscribe'),
     regionSelect = document.querySelectorAll('.modal-region__link'),
     regionBtn = document.querySelector('.js-region-city'),
     burgerMenu = document.querySelector('.adaptive-menu');


 document.addEventListener('click', e => {

     let target = e.target;

     if (target && (target.classList.contains('js-call') || target.classList.contains('modal-call__exit'))) {
         openCloseModal(e, modalCall);
     }
     if (target && (target.classList.contains('js-modal-header') || target.classList.contains('adaptive-menu__exit'))) {
        openCloseModal(e, burgerMenu);
    }
     if (target && (target.classList.contains('js-one-click') || target.classList.contains('modal-one-click__exit'))) {
         openCloseModal(e, modalOneClick);
     }
     if (target && (target.classList.contains('js-job') || target.classList.contains('modal-job__exit'))) {
         openCloseModal(e, modalJob);
     }
     if (target && (target.classList.contains('js-subscribe') || target.classList.contains('modal-subscribe__exit'))) {
         openCloseModal(e, modalSubscribe);
     }
     if (target && (target.classList.contains('js-assortment') || target.classList.contains('modal-assortment__exit'))) {
         openCloseModal(e, modalAssortment);
     }
     if (target && (target.classList.contains('js-region') || target.classList.contains('modal-region__exit'))) {
         openCloseModal(e, modalRegion);
     }
     if (target.classList.contains('modal-region__link')) {
         for (let i = 0; i < regionSelect.length; i++) {
             if (regionSelect[i] == target) {
                 let citiValue = regionSelect[i].innerHTML;
                 localStorage.setItem('city', citiValue)
                 let testValue = localStorage.getItem('city')
                 if (testValue == 'undifiend') {
                     regionBtn.innerHTML = 'Москва';
                 } else {
                     regionBtn.innerHTML = testValue.innerHTML;
                     regionBtn.innerHTML = testValue;
                 }

             }
         }
         /*
         regionSelect.forEach(item => {
             if (item == target) {
                 let citiValue = item.innerHTML;
                 localStorage.setItem('city', citiValue)
                 let testValue = localStorage.getItem('city')
                 regionBtn.innerHTML = testValue.innerHTML;
                 regionBtn.innerHTML = testValue;
             }
         });
         */
         openCloseModal(e, modalRegion);
     } else if (target.classList.contains('js-region-close')) {
         let city = document.querySelector('.js-select-city');
         localStorage.setItem('city', city.innerHTML);
         let testValue = localStorage.getItem('city');
         regionBtn.innerHTML = testValue;
         openCloseModal(e, modalRegion);
     }


     /* ЗАКРЫТИЕ ПО КЛИКУ НА САЙДБАР */
     if (target && target.classList.contains('sidebar-bg')) {
         e.preventDefault();
         //html.classList.toggle('lock');
         modalBlock.classList.toggle('sidebar-bg');
         for (let i = 0; i < allModal.length; i++) {
             if (allModal[i].classList.toggle('active')) {
                 allModal[i].classList.remove('active');
             }
         }
         header.classList.toggle('blur');
        main.classList.toggle('blur');
        footer.classList.toggle('blur');
         /*
         allModal.forEach(item => {
             if (item.classList.toggle('active')) {
                 item.classList.remove('active');
             }
         });*/
     }

 });

 function openCloseModal(e, modal) {
     e.preventDefault();
     //html.classList.toggle('lock');
     //body.classList.toggle('lock');
     modalBlock.classList.toggle('sidebar-bg');
     modal.classList.toggle('active');
     header.classList.toggle('blur');
     main.classList.toggle('blur');
     footer.classList.toggle('blur');
 }


    /* TABS */
    let bannerParent = document.querySelector('.banner'),
        bannerLink = document.querySelectorAll('.banner__link'),
        bannerTab = document.querySelectorAll('.js-banner-tabs');

    if (bannerParent) {
        toggleTabs(bannerLink, bannerTab, bannerParent, 'banner__link');
    }
    

    function toggleTabs(link, tabs, parent, classContains, subRegion, subLink, subContent) {
        hideTabs(link, tabs);
        showTabs(0, link, tabs);

        parent.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(classContains)) {
                e.preventDefault();

                for (let i = 0; i < link.length; i++) {
                    if (link[i] === e.target) {
                        hideTabs(link, tabs);
                        showTabs(i, link, tabs);
                    }
                }
            }
            
        });
    }

    function showTabs(i = 0, link, content) {
        link[i].classList.add('active');
        content[i].classList.add('active');
    }

    function hideTabs(link, content) {
        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('active');
        }
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
        }
    }

    /* SHOW HIDE CONTENT */
    let footerLink = document.querySelectorAll('.footer__title'),
        footerContent = document.querySelectorAll('.footer__nav');

        if(footerLink.length > 0){
            toggleContent(footerLink, footerContent, 'footer__title');
        }
    function toggleContent(link, content, linkClass) {
        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(linkClass)) {
                e.preventDefault();
                for (let i = 0; i < link.length; i++) {
                    if (e.target == link[i]) {
                        link[i].classList.toggle('active');
                        content[i].classList.toggle('active');
                    }
                }
            }
        });
    }


    let sliderBanner = new Swiper('.swiper-reviews', {
        slidesPerView: 1,
        spaceBetween: 0,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination-banner',
            clickable: true,

        },

    });
   
    let sliderTags = new Swiper('.swiper-tags', {
        slidesPerView: "auto",
        spaceBetween: 20,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            prevEl: '.tags__prev',
            nextEl: '.tags__next',
        },

    });
    let sliderRegion = new Swiper('.swiper-region', {
        slidesPerView: 1,
        spaceBetween: 100,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            prevEl: '.region__prev',
            nextEl: '.region__next',
        },
        breakpoints:{
            0:{
                slidesPerView:1,
                spaceBetween: 20,
            },
            767:{
                spaceBetween: 50,
                slidesPerView:2,
            },
            
            1199:{
                spaceBetween: 100,
            },
        }

    });


    /* RATING */
    let ratingParent = document.querySelector('.js-rating'),
        ratingInput = document.querySelector('#js-rating'),
        ratingStar = document.querySelectorAll('.js-rating > li');

    if (ratingParent) {
        ratingParent.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            if (target && target.tagName == 'LI') {
                for (let i = 0; i < ratingStar.length; i++) {
                    ratingStar[i].classList.remove('active')
                }
                for (let i = 0; i => ratingStar.length; i++) {
                    if (ratingStar[i] == target) {
                        ratingStar[i].classList.add('active');
                        ratingInput.value = ++i;
                        return
                    } else {
                        ratingStar[i].classList.add('active');
                    }
                }
            }

        });
    }
/* card */
    
let cards = document.querySelectorAll('.banner__card'),
oldPrice = document.querySelectorAll('.card__price'),
newPrice = document.querySelectorAll('.card__price-b'),
economy = document.querySelectorAll('.card__economy');

if(cards){
    for(let i = 0; i < cards.length;i++){
        let oldP = +oldPrice[i].innerHTML.replace(/\D+/g, ''),
            newP = +newPrice[i].innerHTML.replace(/\D+/g, ''),
            resultNum = oldP - newP,
            resultDec =   (oldP - newP) / (oldP / 100);
        if(resultNum > 0){
            economy[i].innerHTML = `${resultNum} ₽ ${resultDec.toFixed(1)} %`;
        }
        else{
            economy[i].innerHTML = '-';
        }
    }
}

    /* VIDEO */
    function findVideos() {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }

    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');

        return iframe;
    }

    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();
});


/* АДАПТИВНОЕ ПЕРЕМЕЩЕНИЕ БЛОКОВ */
function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    this.nodes = document.querySelectorAll("[data-da]");

    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();