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
                    <button class="product-specImg" data-imgsrc="${data.productspec_pic}">產品規格圖 ></button>
                </div>`
    }
};

const stateMap= {
    productData: []
}

const mockData = [
    {
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋1',
        traits: '產品規格1',
        size: '尺寸1',
        productspec_pic: '/image/square_1.png'
    },
    {
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋2',
        traits: '產品規格2',
        size: '尺寸2',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋3',
        traits: '產品規格3',
        size: '尺寸3',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋4',
        traits: '產品規格4',
        size: '尺寸4',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋5',
        traits: '產品規格5',
        size: '尺寸5',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋6',
        traits: '產品規格6',
        size: '尺寸6',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋7',
        traits: '產品規格7',
        size: '尺寸7',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋8',
        traits: '產品規格8',
        size: '尺寸8',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋9',
        traits: '產品規格9',
        size: '尺寸9',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋10',
        traits: '產品規格10',
        size: '尺寸10',
        productspec_pic: '產品規格圖'
    },

];

const productRender = ($container, productData) => {
    $container.empty();
    productData.forEach((data)=>{
        let $productBlock = $(htmlMap.productBlock(data));
        let $specImgButton = $productBlock.find('.product-specImg');
        $specImgButton.on('click',()=>{
            console.log(data.productspec_pic);
            let $spec_img = $(`<img src="${data.productspec_pic}">`);
            $('.modal').find('.content').empty();
            $('.modal').find('.content').append($spec_img);
            $('.modal_container').show();
        })
        $container.append($productBlock);
    });
}

const bindFilterEvent = ($selector) => {
    let $items = $selector.find('.item');
    $items.each((index, item)=>{
        $(item).on('click',()=>{
            let newData = [];
            $items.removeClass('active');
            if($(item).hasClass('all')){
               newData = stateMap.productData;
            } else {
                stateMap.productData.forEach((data)=>{
                    if(data.productName.includes($(item).text())){
                        newData.push(data)
                    }
                });
            }
            $(item).addClass('active');
            productRender($('.product-container'), newData);
        });
    });
}

const getProductData = () =>{
    stateMap.productData = mockData;
}

const bindModalCloseEvent = () =>{
    $('.modal').find('.close').on('click',()=>{
        $('.modal_container').hide();
    });
}

//TODO: 彈跳視窗未完成
$(window).on('load', function (){
    header();
    footer();
    getProductData();
    productRender($('.product-container'), stateMap.productData);
    bindFilterEvent($('.selector'));
    bindModalCloseEvent();
});