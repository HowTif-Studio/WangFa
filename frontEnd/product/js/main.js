import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";
const htmlMap = {
    productBlock: (data) => {
        return `<div class="product-block">
                    <img class="product-img" src="${data.img}">
                    <div class="product-name">${data.productName}</div>
                    <div class="product-spec">${data.productSpec}</div>
                    <div class="product-size">${data.productSize}</div>
                    <button class="product-specImg">${data.productSpecImg}</button>
                </div>`
    }
};

const mockData = [
    {
        img:'',
        productName: '產品名稱1',
        productSpec: '產品規格1',
        productSize: '尺寸1',
        productSpecImg: '產品規格圖'
    },

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