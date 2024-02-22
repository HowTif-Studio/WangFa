require('../scss/main.scss');
import $ from 'jquery';
const htmlMap = {
    main: `<div class="header">
              <div class="header-txt">
                <h1>王發機械有限公司</h1>
              </div>
              <div class="header-info">
                  <div class="item">
                    <div class="title">聯絡電話</div>
                    <div class="detail">0932-022-737</div>
                  </div>
                  <div class="item">
                     <div class="title">營業時間</div>
                     <div class="detail">AM8:30-PM5:30(Mon-Fri)</div>
                  </div>
                  <div class="item">
                     <div class="title">地址</div>
                     <div class="detail">新北市汐止區福德一路141巷11號2樓</div>
                  </div>
              </div>
           </div>
           <div class="menubar">
             <a class="tab active" href="home.html">首頁</a>
             <a class="tab" href="">公司簡介</a>
             <a class="tab" href="">產品簡介</a>
             <a class="tab" href="">生產設備</a>
             <a class="tab" href="">聯絡我們</a>
           </div>`
};

const init = () => {
    let $top = $('#top');
    $top.html(htmlMap.main);

};

$(window).on('load', function (){
    init();
});


