import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";
const htmlMap = {
    productBlock: (data) => {
        return `<div class="product-block">
                    <img class="product-img" src="${data.product_pic}">
                    <div class="product-name">${data.productName}</div>
                    <div class="product-spec">${data.traits} · ${data.size}</div>
                    <button class="product-specImg">${data.productspec_pic}</button>
                </div>`
    }
};

const mockData = [
    {
        product_pic:'',
        productName: '產品名稱1',
        traits: '產品規格1',
        size: '尺寸1',
        productspec_pic: '產品規格圖'
    },
    {
        product_pic:'',
        productName: '產品名稱2',
        traits: '產品規格2',
        size: '尺寸2',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'',
        productName: '產品名稱3',
        traits: '產品規格3',
        size: '尺寸3',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'',
        productName: '產品名稱4',
        traits: '產品規格4',
        size: '尺寸4',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'',
        productName: '產品名稱5',
        traits: '產品規格5',
        size: '尺寸5',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'',
        productName: '產品名稱6',
        traits: '產品規格6',
        size: '尺寸6',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'',
        productName: '產品名稱7',
        traits: '產品規格7',
        size: '尺寸7',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'',
        productName: '產品名稱8',
        traits: '產品規格8',
        size: '尺寸8',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'',
        productName: '產品名稱9',
        traits: '產品規格9',
        size: '尺寸9',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'',
        productName: '產品名稱10',
        traits: '產品規格10',
        size: '尺寸10',
        productspec_pic: '產品規格圖'
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