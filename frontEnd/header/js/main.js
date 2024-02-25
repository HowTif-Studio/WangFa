require('../scss/main.scss');
import $ from 'jquery';
const htmlMap = {
    main: `<div class="menubar">
             <a class="tab active" href="/home">首頁</a>
             <a class="tab" href="/about">關於王發</a>
             <a class="tab" href="/product">產品介紹</a>
             <a class="tab" href="/contact">聯絡我們</a>
           </div>`
};

export const init = () => {
    let $top = $('.header');
    $top.html(htmlMap.main);

};

$(window).on('load', function (){
    init();
});


