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
    {
        img:'',
        productName: '產品名稱2',
        productSpec: '產品規格2',
        productSize: '尺寸2',
        productSpecImg: '產品規格圖'
    },{
        img:'',
        productName: '產品名稱3',
        productSpec: '產品規格3',
        productSize: '尺寸3',
        productSpecImg: '產品規格圖'
    },{
        img:'',
        productName: '產品名稱4',
        productSpec: '產品規格4',
        productSize: '尺寸4',
        productSpecImg: '產品規格圖'
    },{
        img:'',
        productName: '產品名稱5',
        productSpec: '產品規格5',
        productSize: '尺寸5',
        productSpecImg: '產品規格圖'
    },{
        img:'',
        productName: '產品名稱6',
        productSpec: '產品規格6',
        productSize: '尺寸6',
        productSpecImg: '產品規格圖'
    },{
        img:'',
        productName: '產品名稱7',
        productSpec: '產品規格7',
        productSize: '尺寸7',
        productSpecImg: '產品規格圖'
    },{
        img:'',
        productName: '產品名稱8',
        productSpec: '產品規格8',
        productSize: '尺寸8',
        productSpecImg: '產品規格圖'
    },{
        img:'',
        productName: '產品名稱9',
        productSpec: '產品規格9',
        productSize: '尺寸9',
        productSpecImg: '產品規格圖'
    },{
        img:'',
        productName: '產品名稱10',
        productSpec: '產品規格10',
        productSize: '尺寸10',
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