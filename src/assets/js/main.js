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
        modalQuest = document.querySelector('.modal-quest');


    document.addEventListener('click', e => {

        let target = e.target;

        if (target && (target.classList.contains('js-call') || target.classList.contains('modal-call__exit'))) {
            openCloseModal(e, modalCall);
        }
        if (target && (target.classList.contains('js-quest') || target.classList.contains('modal-quest__exit'))) {
            openCloseModal(e, modalQuest);
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
        bannerTab = document.querySelectorAll('.js-banner-tabs'),
        consultParent = document.querySelector('.consult'),
        consultLink = document.querySelectorAll('.consult__link'),
        consultTab = document.querySelectorAll('.js-consult-tabs');

    if (bannerParent) {
        toggleTabs(bannerLink, bannerTab, bannerParent, 'banner__link');
    }
    if (consultParent) {
        toggleTabs(consultLink, consultTab, consultParent, 'consult__link');
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

    if (footerLink.length > 0) {
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


    let sliderReviews = new Swiper('.swiper-reviews', {
        slidesPerView: 1,
        spaceBetween: 0,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            prevEl: '.reviews__prev',
            nextEl: '.reviews__next',
        },

    });

});


