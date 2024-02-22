require('../scss/main.scss');
import $ from 'jquery';

const htmlMap = {
    main: `<div class="contact">
             <div class="item logo">
                <img src="http://fakeimg.pl/280x80/">
                <div class="text"></div>
             </div>
             <div class="item info">
                <div class="title">公司資訊</div>
                <div class="detail">
                  <ul>
                    <li>電話：02-2694-5249</li>
                    <li>傳真：02-2694-5249</li>
                    <li>行動電話：0932-022-737</li>
                    <li>信箱：xxx@mail.com</li>
                    <li>地址：新北市汐止區福德一路141巷11號2樓</li>
                  </ul>
                </div>
             </div>
             <div class="item location">
                <div class="title">公司位置</div>
                <div class="map"></div>        
             </div>
           </div>`
};

const init = () => {
    let $footer = $('.footer');
    $footer.html(htmlMap.main);

};

$(window).on('load', function (){
    init();
});