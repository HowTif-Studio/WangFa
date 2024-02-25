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
        productName: '產品名稱1',
        img:''
    },
    {
        productName: '產品名稱2',
        img:''
    },
    {
        productName: '產品名稱3',
        img:''
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