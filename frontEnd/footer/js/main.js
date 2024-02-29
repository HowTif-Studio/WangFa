require('../scss/main.scss');
import $ from 'jquery';

const htmlMap = {
    main: `<div class="info">
              <div class="logo"></div>
              <ul class="left">
                <li>電話：(02)2694-5249</li>
                <li>傳真：(02)2693-5200</li>
                <li>行動電話：0932-022-737</li>
              </ul>
              <ul class="right">
                <li>E-Mail：wang.fa@msa.hinet.net</li>
                <li>地址：新北市汐止區福德一路 141 巷 11 號 2 樓</li>
              </ul>
           </div>
           <div class="copyRight">COPYRIGHT-POWER BY WANGFA</div>`
};

export const init = () => {
    let $footer = $('.footer');
    $footer.html(htmlMap.main);

};

$(window).on('load', function (){
    init();
});