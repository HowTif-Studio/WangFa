import "../scss/main.scss";
import $ from "jquery";
import axios from "axios";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";

const htmlMap = {
    productBlock: (data) => {
      return `<div class="product-block">
                <img class="product-img" src="${data.product_pic}">
                <div class="product-content">${data.productname}</div>
                <div class="product-text">${data.traits} · ${data.size}</div>
              </div>`
    }
};

const mockData = [
    {
        productName: '防臭式鑄鐵蓋',
        img:'/image/square.png',
        size:"方型 · 60x60 70x70 80x80"
    },
    {
        productName: '防臭式鑄鐵蓋',
        img:'/image/circle.png',
        size:"圓型 · 60cm∮ 70cm∮ 80cm∮"
    },
    {
        productName: '防臭式鑄鐵蓋',
        img:'/image/circle_square.png',
        size:"方框圓蓋 · 60x60cm∮ 70x70cm∮ 80x80cm∮"
    },
    {
        productName: '自設污水',
        img:'/image/circle_2.png',
        size:"方型 · 60cm∮"
    }
];

const productRender = async ($container) => {
    let apiUri = "/api/product";
    let productData = [];
    await axios.get(apiUri)
        .then((result)=>{
            productData = result.data;
        })
        .catch((error)=>{
            console.log(error);
        });

    productData.forEach((data, index)=>{
        if(index < 4){
            let $productBlock = $(htmlMap.productBlock(data));
            $container.append($productBlock);
        }
    });
}


//表單送出
const bindSentEvent= () => {
    $('#sent').on('click', (e)=>{
        console.log('click!!')
        getEmailData();
    });
}

//表單送出：按下傳送按鈕後執行
function getEmailData() {
    let $name_input = $('#name_input');
    let $email_input = $('#email_input');
    let $phone_input = $('#phone_input');
    let $content_input = $('#content_input');
    let $mailTo = $('#mailTo');
    let to = "wang.fa@msa.hinet.net"; // 寫死的傳送對象
    let name = $name_input.val(); // 讀取 ID 物件中的值
    let email = $email_input.val();
    let tel = $phone_input.val();
    let subject = "王發機械：問題詢問";

//把資料都塞到 mail body 中
    let body = "" + $content_input.val() + '%0A%0A%0A';//%0A是換行 換了三行
    body += "From：" + name + '%0A';
    body += "Email：" + email + '%0A';
    body += "Tel：" + tel;
//傳送的主要程式碼
    $mailTo.attr('href', "mailto:" + to + "?subject=" + subject + "&body=" + body);
    $mailTo[0].click();
}



$(window).on('load', function (){
    header();
    footer();
    productRender($('.product-container'));
    bindSentEvent();
});

