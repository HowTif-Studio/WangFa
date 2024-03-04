import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";

const htmlMap = {
    productBlock: (data) => {
      return `<div class="product-block">
                <img class="product-img" src="${data.img}">
                <div class="product-content">${data.productName}</div>
              </div>`
    }
};

const mockData = [
    {
        productName: '防臭式鑄鐵蓋',
        img:'/image/circle_1.png'
    },
    {
        productName: '防臭式鑄鐵蓋',
        img:'/image/square_circle_1.png'
    },
    {
        productName: '防臭式鑄鐵蓋',
        img:'/image/square_1.png'
    },
    {
        productName: '自設污水',
        img:'/image/square_1.png'
    }
];

const productRender = ($container) => {
    mockData.forEach((data)=>{
       let $productBlock = $(htmlMap.productBlock(data));
       $container.append($productBlock);
    });
}
$(window).on('load', function (){
    header();
    footer();
    productRender($('.product-container'));
});